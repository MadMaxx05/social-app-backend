const Router = require('express')
const router = new Router()
const controller = require('./authController')
const {check} = require("express-validator")
const authMiddleware = require('./middlewaree/authMiddleware')
const isItThatUserMiddleware = require('./middlewaree/isItThatUserMiddleware')
const User = require('./models/User')

router.post('/fullName/:username', isItThatUserMiddleware, (req, res) => {
    try {
        const fullName = req.body.fullName;
        User.updateOne({username: req.params.username}, {$set: {fullName: fullName}}, 
        (err)=>{
            if(err) return res.status(200).json({message: "Error to update fullName!"})}
        )
        return res.json({message: "Имя успешно изменено"})
    } catch (e) {
        console.log(e)
        res.status(400).json({message: 'Fullname error'})
    }
})

router.post('/country/:username', (req, res) => {
    try {
        const country = req.body.country;
        User.updateOne({username: req.params.username}, {$set: {country: country}}, 
        (err)=>{
            if(err) return res.status(200).json({message: "Error to update country!"})}
        )
        return res.json({message: "Страна успешно изменена"})
    } catch (e) {
        console.log(e)
        res.status(400).json({message: 'Country change error'})
    }
})

router.post('/city/:username', (req, res) => {
    try {
        const city = req.body.city;
        console.log(city);
        User.updateOne({username: req.params.username}, {$set: {city: city}}, 
        (err)=>{
            if(err) return res.status(200).json({message: "Error to update city!"})}
        )
        return res.json({message: "Город успешно изменён"})
    } catch (e) {
        console.log(e)
        res.status(400).json({message: 'City change error'})
    }
})

router.post('/description/:username', (req, res) => {
    try {
        const description = req.body.description;
        User.updateOne({username: req.params.username}, {$set: {description: description}}, 
        (err)=>{
            if(err) return res.status(200).json({message: "Error to update description!"})}
        )
        return res.json({message: "Описание успешно изменено"})
    } catch (e) {
        console.log(e)
        res.status(400).json({message: 'Description error'})
    }
})

router.post('/contact/:username', (req, res) => {
    try {
        const contact = req.body.contact;
        User.updateOne({username: req.params.username}, {$set: {contact: contact}}, 
        (err)=>{
            if(err) return res.status(200).json({message: "Error to update contact!"})}
        )
        return res.json({message: "Контакты успешно изменены"})
    } catch (e) {
        console.log(e)
        res.status(400).json({message: 'contact error'})
    }
})

router.post('/interests/:username', (req, res) => {
    try {
        const interests = req.body.interests;
        User.updateOne({username: req.params.username}, {$set: {interests: interests}}, 
        (err)=>{
            if(err) return res.status(200).json({message: "Error to update interests!"})}
        )
        return res.json({message: "Интересы успешно изменены"})
    } catch (e) {
        console.log(e)
        res.status(400).json({message: 'interests error'})
    }
})

module.exports = router