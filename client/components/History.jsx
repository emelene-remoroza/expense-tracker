import React from 'react'

function History () {
  
  const initialHistory = [
    { id: 1, month: 'Nov-2021', budget: 1000, totalExpenses: 850, savings: 150},
    { id: 2, month: 'Dec-2021', budget: 1000, totalExpenses: 950, savings: 50},
    { id: 3, month: 'Jan-2022', budget: 1000, totalExpenses: 735, savings: 265}
  ]

  return (
    <div className="history">
      <h4>Transaction History</h4>
        {initialHistory.map(initialHistory => {
          return(<table className='table2' key={initialHistory.id}>
            <thead>
              <tr>
                <th>Month</th>
                <th>Budget</th>
                <th>Expenses</th>
                <th>Savings</th>
              </tr>
            </thead>
            <tbody>
              <tr>
              <td>{initialHistory.month}</td>
              <td>${initialHistory.budget}</td>
              <td>${initialHistory.totalExpenses}</td>
              <td>${initialHistory.savings}</td>
              </tr>
            </tbody>
          </table>)
        })}

    </div>
  )
}

export default History