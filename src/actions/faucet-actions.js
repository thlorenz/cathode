const { ADD_FAUCET } = require('./action-types')

exports.addFaucet = function addFaucet(faucet) {
  return { type: ADD_FAUCET, faucet }
}
