import React from 'react'

import {budget} from './Budget'
import {totalExpenses} from './TotalExpenses'

function Balance () {

  const  balance  = budget - totalExpenses

  return (
    <>
    <div className="sidebox">
      <span>Balance: ${balance}</span>
    </div>
    </>
  )
}

export default Balance
