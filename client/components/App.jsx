import React, { useState, useEffect } from 'react'

import AddTransaction from './AddTransaction'
import Transaction from './Transaction'

import { getTransactions } from '../api'


function App () {
  const [transactions, setTransactions] = useState([])
  const [addExpense, setAddExpense] = useState(false)

  
  const newTransactionAdded = (allTransactions) => {
    setTransactions(allTransactions)
  }
  
  const clickHandler = evt => {
    setAddExpense(true)
  }

  const deletedExpense = () => {
    getTransactions()
      .then(transactions => {
        setTransactions(transactions)
        return null
      })
      .catch(err => {
        console.log(err.message)
      })
  }

  useEffect(() => {
    getTransactions()
      .then(transactions => {
        setTransactions(transactions)
        return null
      })
      .catch(err => {
        console.log(err.message)
      })
  }, [])

  return (
    <div>
      <h1>Expense Tracker!</h1>
      <button onClick={clickHandler}>Add Transaction</button>
        {addExpense && <AddTransaction cb = {newTransactionAdded}/>}

      <h2>Transactions</h2>
        {transactions.map(transaction => {
          return <Transaction key={transaction.id} transaction = {transaction} deletedExpense = {deletedExpense}/>
        })}
    </div>
  )
}

export default App
