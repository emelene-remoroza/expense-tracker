import React, { useState, useEffect } from 'react'

import { getTransactions } from '../api'

import AddTransaction from './AddTransaction'


function App () {


  return (
    <div>
      <h1>Expense Tracker!</h1>
      <AddTransaction />
    </div>
  )
}

export default App
