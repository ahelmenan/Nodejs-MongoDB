
const mongoose = require('mongoose')
const validator = require('validator')

mongoose.connect('mongodb://127.0.0.1:27017/task-manager-api', {
    useNewUrlParser : true,
    useCreateIndex : true,
    useFindAndModify : false
})




// const prod1  = new Product ({
//     description : 'grey yacht',
// })

// prod1.save().then(() => {
//     console.log(prod1);
    
// }).catch((error) => {
//     console.log('Error!', error);
// })