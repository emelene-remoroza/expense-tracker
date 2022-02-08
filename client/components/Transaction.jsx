import React from 'react'
import { deleteTransaction } from '../api'
import { updateTransaction } from '../api'

export default function Transaction (props) {
  const clickHandler = () => {
    deleteTransaction(props.transaction.id)
      .then(() => {
        return props.deletedExpense()
      })
      .catch(err => {
        console.log(err.message)
      })
  }

  const clickHandler2 = () => {
    updateTransaction(props.transaction.id)
      .then(() => {
        return props.updateExpense()
      })
      .catch(err => {
        console.log(err.message)
      })
  }


  return (
    <table class='table'>
    <thead>
      <tr>
        <th>ID</th>
        <th>Transaction</th>
        <th>Date</th>
        <th>Amount</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>{props.transaction.id}</td>
        <td>{props.transaction.expense}</td>
        <td>{props.transaction.date}</td>
        <td>$ {props.transaction.amount}</td>
        <td><button onClick={clickHandler}>Delete</button></td>
        <td><button onClick={clickHandler2}>Edit</button></td>
      </tr>
    </tbody>
  </table>
  )
}