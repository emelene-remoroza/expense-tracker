const environment = process.env.NODE_ENV || 'development'
const config = require('./knexfile')[environment]
const connection = require('knex')(config)

module.exports = {
  getTransactions
}

function getTransactions (db = connection) {
  return db('transactions').select()
}
