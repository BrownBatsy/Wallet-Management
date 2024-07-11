const mongoose = require('mongoose')

const UserScheema = new mongoose.Schema({
    name: String,
    email: String,
    password: String
})

const UserModel = mongoose.model("users", UserScheema)
module.exports = UserModel

