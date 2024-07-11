const mongoose = require('mongoose')

const LimitScheema = new mongoose.Schema({
    pass: String,
    limit_amount: Number
})

const limit = mongoose.model("limitbanks", LimitScheema)
module.exports = limit