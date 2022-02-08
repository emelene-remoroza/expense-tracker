import React, { useState, useEffect } from 'react'

import TransactionList from './TransactionList'
import AddTransaction from './AddTransaction'



function App () {
  const [transactions, setTransactions] = useState([])
  const [addExpense, setAddExpense] = useState(false)
  
  const newTransactionAdded = (allTransactions) => {
    setTransactions(allTransactions)
  }
  
  const clickHandler = evt => {
    setAddExpense(true)
  }

  return (
    <div>
      <h1>Expense Tracker!</h1>
      <TransactionList />
      <button onClick={clickHandler}>Add Transaction</button>
        {addExpense && <AddTransaction cb = {newTransactionAdded}/>}
    </div>
  )
}

export default App
