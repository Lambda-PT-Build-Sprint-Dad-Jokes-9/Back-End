const express = require('express')

const router = express.Router()

const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const secret = require('../config/secrets')
const Users = require('../models/users-model')

router.post('/login', (req, res) => {
    const credentials = req.body
    Users.find(credentials.username)
        .then((_user) => {
            console.log(_user)
            if (_user && bcrypt.compareSync( credentials.password,_user.password)) {
                const token = generageToken(_user)
                res.status(201).json({ messege: 'Log in Success!.. heres the token...', token })
            } else {
                res.status(400).json({ messege: 'somethings wrong with that user boss...' })
            }
        }).catch((_err) => {
            console.log(_err)
            res.status(500).json({ messege: 'sorry boss.. something went terribly wrong' })
        })
})

router.post('/register', (req, res) => {
    const user = req.body
    const hash = bcrypt.hashSync(user.password, 12)
    user.password = hash
    Users.register(user)
        .then((_user) => {
            if (!_user) {
                res.status(400).json({ messege: 'somethings wrong with that user boss...' })
            } else {
                res.status(201).json({ messege: 'user registered correctly!' })
            }
        }).catch((_err) => {
            res.status(500).json({ messege: 'sorry boss.. something went terribly wrong' })
        })
})

function generageToken(_user) {
    const payload = {
        subject: _user.id,
        username: _user.username
    }
    const options = {
        expiresIn: '8h'
    }
    return jwt.sign(payload, secret.jwtSecret, options)
}
module.exports = router 