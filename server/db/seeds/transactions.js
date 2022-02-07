exports.seed = (knex) => {
  // Deletes ALL existing entries
  return knex('transactions').del()
    .then(() => {
      // Inserts seed entries
      return knex('transactions').insert([
        { id: 1, expense: 'Groceries', amount: 105.50},
        { id: 2, expense: 'Petrol', amount: 60.00},
        { id: 3, expense: 'Netflix', amount: 17.00},
        { id: 4, expense: 'Internet', amount: 85.00},
        { id: 5, expense: 'Stationeries', amount: 28.50}
      ])
    })
}