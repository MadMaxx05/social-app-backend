const Router = require('express')
const router = new Router()
const controller = require('./authController')
const {check} = require("express-validator")
const authMiddleware = require('./middlewaree/authMiddleware')
const isItThatUserMiddleware = require('./middlewaree/isItThatUserMiddleware')
const User = require('./models/User')

router.get('/users', authMiddleware, controller.getUsers)

router.get('/user/:username', authMiddleware, async (req, res) => {
    try {
        const username = req.params.username;
        const user = await User.findOne({username: username})
        res.json(user)
    } catch (e) {
        console.log(e)
    }
})

router.get('/users/:search', authMiddleware, async (req, res) => {
    try {
        const users = await User.find({interests: { $in: ['vaporizing', 'talking'] }})
        res.json(users)
    } catch (e) {
        console.log(e)
    }
})

module.exports = router