const express = require("express")
const mongoose = require('mongoose')
const cors = require('cors')
const UserModel = require('./models/User')
const WalletModel = require('./models/wallet')
const limit = require('./models/limit_spend')

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


// app.get('/home', (req, res) => {
//     WalletModel.find({})
// })

app.post('/register', (req, res) => {
    UserModel.create(req.body)
    .then(User => res.json(User))
    .catch(err => console.log(res.json(err)))
})

app.post('/AddWallet', (req, res) => {
    WalletModel.create(req.body)
    .then(Wallet => res.json(Wallet))
    .catch(err => console.log(res.json(err)))
})

app.post('/limitEx', (req, res) => {
    limit.create(req.body)
    .then(Limitbanks => res.json(Limitbanks))
    .catch(err => console.log(res.json(err.message)))
})

app.listen(3001, () => {
    console.log("server is running")
})