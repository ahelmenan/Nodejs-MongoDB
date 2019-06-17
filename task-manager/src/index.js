const express = require('express')
require('./db/mongoose')
const User = require('./db/models/user')
const Product = require('./db/models/product');
const productRouter = require('./routers/product');
const userRouter = require('./routers/user');
const bcrypt = require('bcryptjs');
const app = express()
const port = process.env.PORT || 3000


// app.use((req, res, next) => {
//     if(req.method)
//         res.status(501).send('website down for maintenance perposes');
//     // else
//     //     next();
// })

app.use(express.json())
app.use(productRouter)
app.use(userRouter)

app.listen(port, () => {
    console.log(`Server is on Port ${port}`);
})

const myFunction = async() => {
    const password = 'khouribga123';
    const hashedPassword = await bcrypt.hash('khouribga123', 12)
    console.log(password);
    console.log(hashedPassword);
    
    const isMatch = await bcrypt.compare('khouribga123', hashedPassword);
    console.log(isMatch);
}

// myFunction();