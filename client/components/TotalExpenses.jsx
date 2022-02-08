import React from 'react'

//from db seeds
const initialExpense = [
  { id: 1, expense: 'Groceries', date: '2-Feb-2022', amount: 105.50},
  { id: 2, expense: 'Petrol', date: '2-Feb-2022', amount: 60.00},
  { id: 3, expense: 'Netflix', date: '2-Feb-2022', amount: 17.00},
  { id: 4, expense: 'Internet', date: '2-Feb-2022', amount: 85.00},
  { id: 5, expense: 'Stationeries', date: '2-Feb-2022', amount: 28.50}
]


function TotalExpenses () {

  const totalExpenses = initialExpense
    .map(item =>item.amount)
    .reduce((prev, curr) => prev + curr, 0)

  return (
    <>
    <div className="sidebox">
      <span>Total Expense: ${totalExpenses}</span> 
    </div>
    </>
  )
}

export default TotalExpenses