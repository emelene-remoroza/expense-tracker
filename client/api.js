import request from 'superagent'

const serverUrl = '/api/v1/transactions/'

export function getTransactions () {
  return request
    .get(serverUrl)
    .then(response => response.body)
}

export function addTransaction (transaction) {
  return request
    .post(serverUrl)
    .send(transaction)
    .then(response => response.body)
}

