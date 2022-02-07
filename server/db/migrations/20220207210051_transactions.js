exports.up = (knex) => {
  return knex.schema.createTable('transactions', (table) => {
    table.increments('id').primary()
    table.string('expense')
    table.integer('amount')
  })
}

exports.down = (knex) => {
  return knex.schema.dropTable('transactions')
}