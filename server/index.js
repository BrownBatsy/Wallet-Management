const express = require("express")
const mongoose = require('mongoose')
const cors = require('cors')
const UserModel = require('./models/User')
const WalletModel = require('./models/wallet')


const app = express()
app.use(express.json())
app.use(cors())

mongoose.connect("mongodb+srv://SameerKhairul182032:islamshaeb1@walletmanagement.8brwnjb.mongodb.net/user");

app.post("/login", (req, res) => {
    const {email, password} = req.body;
    UserModel.findOne({email: email})
    .then(user => {
        if (user) {
            if(user.password === password) {
                res.json('Success')
            } else {
                res.json("Password is incorrect")
            }
            
        } else {
            res.json("User does not exist")
        }
    })
})


app.get("/fetchwallet", (req, res) => {
     WalletModel.find()
     .then(users => res.json(users))
     .catch(err => res.json(err))
 })

app.post('/register', (req, res) => {
    WalletModel.create(req.body)
    .then(User => res.json(User))
    .catch(err => console.log(res.json(err)))
})

app.post('/AddWallet', (req, res) => {
    WalletModel.create(req.body)
    .then(Wallet => res.json(Wallet))
    .catch(err => console.log(res.json(err)))
})

app.post("/transfer", async (req, res) => {
    const {email,source, dest, amount} = req.body;
    console.log(req.body)
 
    //WalletModel.updateOne({email: email, wallet_id: dest},{$set: {amount: amount,wallet_id: 4}})
   
  
    WalletModel.findOne({email: email,wallet_id: source})
    .then(wallet => {
         console.log(wallet)
        if (wallet) {
 
            if(wallet.amount >= amount) {
                WalletModel.updateMany({email: email, wallet_id: source},{$set: {amount: -amount}})
                .then(user =>{})
                WalletModel.updateOne({email: email, wallet_id: dest},{$inc: {amount: amount}})
                .then(user =>{})
                res.json('Success')
            } else {
                res.json("Insufficient funds")
            }
            
        } else {
            res.json("Wrong wallet id")
        }
    })
})

app.listen(3001, () => {
    console.log("server is running")
})