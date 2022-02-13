const knex = require('knex')
const config = require('./knexfile').test
const testDb = knex(config)

const { getTransactions, deleteTransaction } = require('./db')

beforeAll(() => {
  return testDb.migrate.latest()
})

beforeEach(() => {
  return testDb.seed.run()
})

afterAll(() => testDb.destroy())

describe('getTransactions', () => {
  it('returns the correct transaction array', () => {
    expect.assertions(3)
    return getTransactions(testDb)
      .then((transactions) => {
        expect(transactions).toHaveLength(5)
        expect(transactions[0]).toHaveProperty('expense')
        expect(transactions[1].amount).toBe(60.00)
        return null
      })
  })
})


describe('deleteTransaction', () => {
  test('delete transaction by id', () => {
    expect.assertions(1)
    return deleteTransaction('1', testDb)
      .then(deletedTransaction => {
        expect(deletedTransaction).toEqual(1)
      })
  })
})