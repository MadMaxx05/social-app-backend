const Router = require('express')
const router = new Router()
const controller = require('./authController')
const {check} = require("express-validator")
const authMiddleware = require('./middlewaree/authMiddleware')

router.post('/registration', [
    check('username', "Name field can't be empty").notEmpty(),
    check('password', "Password be more that 4 and less than 15 symbols").isLength({min:4, max:15})
], controller.registration)

router.post('/login', controller.login)

module.exports = router
