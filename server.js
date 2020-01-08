const express = require('express')
const server = express()
const morgan = require('morgan')
const helmet = require('helmet')

const authRotuer = require('./auth/auth-router')

server.use(express.json())
server.use(morgan('combined'))
server.use(helmet())

server.use('/auth', authRotuer)

server.get('/api/jokes', (req, res) => {

})

module.exports = server