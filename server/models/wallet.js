const mongoose = require('mongoose')

const WalletScheema = new mongoose.Schema({
    email: String,
    wallet_id: Number,
    bank: String,
    amount: Number
})

const WalletModel = mongoose.model("wallets", WalletScheema)
module.exports = WalletModel