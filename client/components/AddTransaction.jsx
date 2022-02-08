import React, { useState } from 'react'
import { addTransaction } from '../api'


export default function AddTransaction (props) {
  const cb = props.cb
  const [transact, setTransact] = useState({
    expense: '',
    date: Date,
    amount: 0.00,
  })

  function handleChange (event) {
    const { name, value } = event.target
    const newTransact = {
      ...transact,
      [name]: value
    }
    setTransact(newTransact)
  }

  function handleSubmit (event) {
    event.preventDefault()
    addTransaction(transact)
      .then(transactions => {
        cb(transactions)
        return null
      })
      .catch(err => {
        console.log(err.message)
      })
  }

  return (
    <div>
      {/* <h3>Add New Transaction</h3> */}
      <form onSubmit={handleSubmit}>
        <div>
          <input className='form'
            onChange={handleChange}
            value={transact.expense}
            name="expense"
            placeholder='Enter Transaction'
          ></input>
        {/* </div>
        <div> */}
          <input className='form'
            onChange={handleChange}
            value={transact.date}
            name="date"
            placeholder="Enter Date"
          ></input>
        {/* </div>
        <div> */}
          <input className='form'
            onChange={handleChange}
            value={transact.amount}
            name="amount"
            placeholder="$0.00"
          ></input>
        </div>
        <div>
            <button>Submit</button>

        </div>
      </form>
    </div>
  )
}