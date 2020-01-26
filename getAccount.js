const fetch = require('node-fetch') // import fetch using ES5 syntax
const eosjs = require('eosjs') // import eosjs using ES5 syntax
const JsonRpc = eosjs.JsonRpc // extract JsonRpc class from eosjs and assign to own variable

// a list of testnet endpoints can be found at the following link
// https://github.com/eostoolkit/eos-networks/blob/37de020991c3d6c7e2a0933c232181d7866ed7bb/networks.json#L223
const ENDPOINT = `https://testnet.telos.caleos.io`
const rpc = new JsonRpc(ENDPOINT, { fetch }) // create new rpc instance for our endpoint

// since this routine does an HTTP request we will use async / await syntax
// getAccount is a function taking in a paramter 'accountName'
const getAccount = async (accountName) => {
  // we request the endpoint to execute the `get_account` procedure
  const accountInfo = await rpc.get_account(accountName)
  // the endpoint returns the account information, which we then console out
  console.log('account info: ', accountInfo)
}

// replace `captaincrypt` with the string of the account whose info
// you would like to request
getAccount('captaincrypt')

/* Resuls should look something like the following:

account info:  { account_name: 'captaincrypt',
  head_block_num: 28074886,
  head_block_time: '2020-01-26T00:14:45.000',
  ...
  ram_quota: 129399,
  net_weight: 200000,
  cpu_weight: 200000,
  net_limit: { used: 0, available: 110385499, max: 110385499 },
  cpu_limit: { used: 0, available: 20647737, max: 20647737 },
  ram_usage: 3454,
  permissions:
   [ { perm_name: 'active', parent: 'owner', required_auth: [Object] },
     { perm_name: 'owner', parent: '', required_auth: [Object] } ],
  total_resources:
   { owner: 'captaincrypt',
     net_weight: '20.0000 TLOS',
     cpu_weight: '20.0000 TLOS',
     ram_bytes: 127999 },
  self_delegated_bandwidth:
   { from: 'captaincrypt',
     to: 'captaincrypt',
     net_weight: '20.0000 TLOS',
     cpu_weight: '20.0000 TLOS' },
  refund_request: null,
  voter_info:
  ...

  */