const mongoose = require('mongoose')
const validator = require('validator')

const Product = mongoose.model('Product', {
    description : {
        type : String,
        required : true,
        trim : true
    },
    completed : {
        type : Boolean,
        required : false,
        default : false   
    }
})

module.exports = Product;