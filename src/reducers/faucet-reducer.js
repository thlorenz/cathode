const { ADD_FAUCET } = require('../actions/action-types')

module.exports = function faucetReducer(state = [], action) {
  switch (action.type) {
    case ADD_FAUCET:
      return state.concat(Object.assign({}, action.faucet))
    default:
      return state
  }
}
