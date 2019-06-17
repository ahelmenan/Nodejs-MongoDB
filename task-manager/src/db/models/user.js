const mongoose = require('mongoose')
const validator = require('validator')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken');
const Schema = mongoose.Schema;
const userSchema= new Schema({
    name : {
        type : String,
        trim : true,
        lowercase : true,
    },
    password : {
        type : String,
        minlength : 7,
        trim : true,
        required : true,
        validate(value) {
            // if (value.length < 6)
            //     throw new Error('the pasword is less than six characters')
            // let lowerVal = value.toLowerCase(value)
            if (value.toLowerCase().includes("password"))
                throw new Error(`the password is containing "password"`)
        }
    },
    age : {
        type : Number,
        validate(value) {
            if (value < 0)
                throw new Error('Email is invalid');
        },
        default  : 18
    },
    email : {
        type : String,
        unique : true,
        required : true,
        trim : true,
        lowercase : true,
        validate(value) {
            if (!validator.isEmail(value))
                throw new Error('Email is invalid');
        }
    },

    tokens : [{
        token : {
            type : String,
            required : true,
        }  
    }]
})

userSchema.methods.generateAuthToken = async function() {
    const user = this;

    const token = jwt.sign({ _id : user._id}, 'x');
    user.tokens = user.tokens.concat({token});
    await user.save();
    return token;
}

userSchema.statics.findByCrendentials = async (email, password) => {
    const user = await User.findOne({email});

    if(!user)
        throw new Error('enable to login')

    const isMatch = await bcrypt.compare(password, user.password)
    if(!isMatch)
        throw new Error('Unable to login')
    return user;
}

userSchema.pre('save', async function(next) {
    const user = this;

    if(user.isModified('password'))
        user.password = await bcrypt.hash(user.password, 8);
    next();
})

const User = mongoose.model('User', userSchema)
module.exports = User;