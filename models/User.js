const {Schema, model} = require('mongoose')


const User = new Schema({
    username: {type: String, unique: true, required: true},
    password: {type: String, required: true},
    fullName: {type: String, required: true},
    country: {type: String, required: true},
    city: {type: String, required: true},
    description: {type: String, required: true},
    interests: {type: Array, required: true},
    contact: {type: String, required: true}},
    {
        versionKey: false
    }
)

module.exports = model('User', User)
