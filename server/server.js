const path = require('path')
const express = require('express')

const transactions = require('./routes/transactions')

const server = express()
server.use(express.json())
server.use(express.static(path.join(__dirname, 'public')))

server.use('/api/v1/transactions', transactions)

module.exports = server
