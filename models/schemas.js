const mongoose = require('mongoose')

let menuSchema = new mongoose.Schema({
    name: {
        type: String,
        require: true
    },
    icon: {
        type: String,
        require: true
    },
    menu: {
        type: String,
        require: true
    },
    url: {
        type: String,
        require: true
    },
    entryDate: {
        type: Date,
        default: Date.now
    }
})

let usersSchema = new mongoose.Schema({
    email: {
        type: String,
        require: true
    },
    pwd: {
        type: String,
        require: true
    },
    entryDate: {
        type: Date,
        default: Date.now
    }
})

let menu = mongoose.model('menu', menuSchema, 'menu')
let users = mongoose.model('users', usersSchema, 'users')
// name of model, schema associated with, collection we want it to talk to in db

let mySchemas = {
    'menu': menu,
    'users': users
}

module.exports = mySchemas