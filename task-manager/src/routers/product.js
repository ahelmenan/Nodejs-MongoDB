const express = require('express')
const Product = require('../db/models/product');

const router = new express.Router()

router.post('/product', async (req, res) => {
    const product = new Product(req.body)

    try {
        await product.save()
        res.status(201).send(product)
    } catch (e) {
        res.status(400).send(e)
    }
})

router.get('/products', async (req, res) => {

    try {
        const products = await Product.find({})
        res.send(products);
    } catch (e) {
        res.status(500).send(e)
    }
})

router.get('/products/:id', async (req, res) => {
    const _id = req.params.id;

    try {
        const product = await Product.findById(_id);
        if (!product)
            return res.status(404).send();
        res.send(product)
    } catch (e) {
        res.status(500).send(e)
    }
})

// ------------------------------------------------------
router.delete('/products/:id', async (req, res) => {
    try {
        const product = await Product.findByIdAndDelete(req.params.id)
        if (!product) {
            res.status(404).send('not found')
        }
        res.send(product)
    } catch(e) {
        res.status(400).send(e)
    }
})
router.patch('/products/:id', async (req, res) => {
    const update = Object.keys(req.body);
    console.log(Object.keys(req.body));
    const allowedUpdated = ['description', 'completed'];
    const isValid = update.every((updt) => allowedUpdated.includes(updt));
  
    if (!isValid) {
       return res.status(400).send({error : 'invalid update'})
    }
    try {
        const product = await Product.findById(req.params.id);
        update.forEach((updated) => product[updated] = req.body[updated])
        product.save();
        
        // const product = await Product.findByIdAndUpdate(req.params.id, req.body, {new : true, runValidators : true})
        if (!product)
            res.status(404).send()
        res.send(product);
    } catch (e) {
        res.status(400).send(e)
    }
    
})

module.exports = router;
