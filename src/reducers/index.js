const { combineReducers } = require('redux')
const faucets = require('./faucet-reducer')

const rootReducer = combineReducers({ faucets })

module.exports = rootReducer
