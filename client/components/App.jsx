import React, { useState, useEffect } from 'react'

import Header from './Header'
import AddTransaction from './AddTransaction'
import Transaction from './Transaction'
import Budget from './Budget'
import TotalExpenses from './TotalExpenses'
import Balance from './Balance'
import History from './History'

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

  // const updatedExpense = () => {
  //   getTransactions()
  //   .then(transactions => {
  //     setTransactions(transactions)
  //     return null
  //   })
  //   .catch(err => {
  //     console.log(err.message)
  //   })
  // }

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
      <div className='container'>
      <div className='header'><Header /></div>
      <div className='div1'>
        <Budget />
        <TotalExpenses />
        <Balance />
        <History />
      </div>
      <div className='div2'>
        <h3><button onClick={clickHandler}>Add Transaction</button></h3>
          {addExpense && <AddTransaction cb = {newTransactionAdded}/>}
        <h3>Transactions</h3>
          {transactions.map(transaction => {
            return <Transaction key={transaction.id} transaction = {transaction} deletedExpense = {deletedExpense}/>
          })}
        </div>
      </div>  
    </div>
  )
}

export default App
