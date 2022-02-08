const environment = process.env.NODE_ENV || 'development'
const config = require('./knexfile')[environment]
const connection = require('knex')(config)

module.exports = {
  getTransactions,
  addTransaction,
  deleteTransaction
}

function getTransactions (db = connection) {
  return db('transactions').select()
}

function addTransaction (transaction, db = connection) {
  return db('transactions')
    .insert({ expense: transaction.expense, amount: transaction.amount })
}

function deleteTransaction (id, db = connection) {
  return db('transactions')
    .delete()
    .where('id', id)
}

