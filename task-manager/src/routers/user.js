const express = require('express')
const User = require('../db/models/user');
const auth = require('../db/middlewar/auth');


const router = new express.Router();


router.post('/users', async (req, res) => {
    const user = new User(req.body)

    try {
        await user.save();
        const token = await user.generateAuthToken(); 
        res.status(201).send({user, token})
    } catch(e)  {
        res.status(400).send(e)
    }
})
router.post('/users/login', async (req, res) => {
    
    try {
        const user = await User.findByCrendentials(req.body.email, req.body.password)
        const token = await user.generateAuthToken();
        res.send({user, token})
    } catch(e) {
        res.status(400).send(e)
    }
})

router.get('/users/me', auth, (req, res) => {
    res.send(req.user);
    // User.find({}).then((users) => {
    //     res.send(users);
    // }).catch((e) => {
    //     res.status(500).send(e)
    // })
})

router.get('/users/:id', (req, res) => {
    const _id = req.params.id

    User.findById(_id).then((user) => {
        if (!user)
            return res.status(404).send()
        res.send(user)
    }).catch((e) => {
        res.status(500).send(e)
    })
})

router.patch('/users/:id', async (req, res) => {
    const update = Object.keys(req.body);
    console.log(Object.keys(req.body));
    const allowedUpdated = ['name', 'password', 'age', 'email'];
    const isValid = update.every((updt) => allowedUpdated.includes(updt));
  
    if (!isValid) {
       return res.status(400).send({error : 'invalid update'})
    }
    try {
        const user = await User.findById(req.params.id);
        update.forEach((updated) => user[updated] = req.body[updated])
        user.save();
        
        // const product = await Product.findByIdAndUpdate(req.params.id, req.body, {new : true, runValidators : true})
        if (!user)
            res.status(404).send()
        res.send(user);
    } catch (e) {
        res.status(400).send(e)
    }
    
})

module.exports = router