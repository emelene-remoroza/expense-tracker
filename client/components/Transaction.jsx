import React from 'react'
import { deleteTransaction } from '../api'

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

  return (
    <table>
      <thead>
        <tr>
          <th>ID</th>
          <th>Transaction</th>
          <th>Amount</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>{props.transaction.id}</td>
          <td>{props.transaction.expense}</td>
          <td>$ {props.transaction.amount}</td>
          <td><button onClick={clickHandler}>Delete</button></td>
        </tr>
      </tbody>
    </table>
  )
}