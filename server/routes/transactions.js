const express = require('express')
const router = express.Router()

const db = require('../db/db')

// GET /api/v1/transactions/
router.get('/', (req, res) => {
  try {
    res.json({ statement: 'Expense Tracker!' })
  } catch (err) {
    res.status(500).send(err.message)
  }
})

module.exports = router
