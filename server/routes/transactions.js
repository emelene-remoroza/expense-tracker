const express = require('express')
const router = express.Router()

const db = require('../db/db')

// GET /api/v1/transactions/
router.get('/', (req, res) => {
  db.getTransactions()
    .then(transactions => {
      res.json(transactions)
      return null
    })
    .catch(err => {
      res.status(500).send(err.message)
    })
})

// POST /api/v1/transactions/
router.post('/', (req, res) => {
  db.addTransaction(req.body)
    .then(() => {
      return db.getTransactions()
    })
    .then((transaction) => {
      res.json(transaction)
      return null
    })
    .catch(err => {
      res.status(500).send(err.message)
    })
})

module.exports = router
