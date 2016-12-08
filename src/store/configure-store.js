const { createStore } = require('redux')
const rootReducer = require('../reducers')

module.exports = function configureStore(initialState) {
  return createStore(
    rootReducer,
    initialState
  )
}
