const jwt = require('jsonwebtoken')
const {secret} = require('../config');
const User = require('../models/User');

module.exports = async function (req, res, next) {
    if (req.method === "OPTIONS") {
        next()
    }

    try {
        const token = req.headers.authorization.split(' ')[1]
        if (!token) {
            return res.status(403).json({message: "Пользователь не авторизован"})
        }
        const decodedData = jwt.verify(token, secret)
        
        const thisId = await User.findOne({_id: decodedData.id});
        if (thisId.username != req.params.username) {
            return res.status(403).json({message: "Не трогай чужие данные :)"})
        }
        req.user = decodedData
        
        
        next()
    } catch (e) {
        console.log(e)
        return res.status(403).json({message: "Пользователь не авторизован"})
    }
};