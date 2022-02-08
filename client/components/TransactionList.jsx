import React, { useEffect, useState } from 'react'
import { getTransactions } from '../api'

export default function TransactionList () {
  const [transactions, showTransactions] = useState([{ id:1 }])

  useEffect(() => {
    getTransactions()
      .then(transactions => {
        showTransactions(transactions)
        return null
      })
      .catch(err => {
        console.log(err.message)
      })
  }, [])

  return (
    <div>
      <ul>
        {transactions.map(({id, expense, amount}) => {
          return(
            <li key={id}>
              <p>ID: {id} Transaction: {expense} Amount: ${amount}</p>
            </li>
          )
        })}
      </ul>
    </div>
  )
}