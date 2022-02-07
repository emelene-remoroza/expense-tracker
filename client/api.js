import request from 'superagent'

const serverUrl = '/api/v1/transactions/'

export function getTransactions () {
  return request
    .get(serverUrl)
    .then(response => response.body)
}
