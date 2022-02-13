import request from 'supertest'

import server from '../server'
import { getTransactions } from '../db/db'

jest.mock('../db/db')

describe('GET /api/v1/transactions', () => {
  it('respond with array of transactions', () => {
    getTransactions.mockImplementation(() => Promise.resolve([
      { id: 1, expense: 'Groceries', date: '30-01-2022', amount: 105.50},
      { id: 2, expense: 'Petrol', date: '02-02-2022', amount: 60.00},
      { id: 3, expense: 'Netflix', date: '03-02-2022', amount: 17.00},
      { id: 4, expense: 'Internet', date: '04-02-2022', amount: 85.00},
      { id: 5, expense: 'Stationeries', date: '05-02-2022', amount: 28.50}
    ]))
    return request(server)
      .get('/api/v1/transactions')
      .expect(200)
      .then((res) => {
        expect(res.body).toHaveLength(5)
        expect(res.body[0].expense).toBe('Groceries')
        return null
      })
  })
  it('responds with 500 and error on rejection', () => {
    getTransactions.mockImplementation(() => Promise.reject(new Error('mock DB error')))
    return request(server)
      .get('/api/v1/transactions')
      .expect(500)
      .then((err) => {
        expect(err.text).toBe('mock DB error')
        return null
      })
  })
})