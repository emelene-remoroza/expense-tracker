exports.seed = (knex) => {
  // Deletes ALL existing entries
  return knex('transactions').del()
    .then(() => {
      // Inserts seed entries
      return knex('transactions').insert([
        { id: 1, expense: 'Groceries', date: '30-01-2022', amount: 105.50},
        { id: 2, expense: 'Petrol', date: '02-02-2022', amount: 60.00},
        { id: 3, expense: 'Netflix', date: '03-02-2022', amount: 17.00},
        { id: 4, expense: 'Internet', date: '04-02-2022', amount: 85.00},
        { id: 5, expense: 'Stationeries', date: '05-02-2022', amount: 28.50}
      ])
    })
}