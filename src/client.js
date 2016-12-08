const React = require('react')
const { render } = require('react-dom')
const configureStore = require('./store/configure-store')
const { Provider } = require('react-redux')
const { Router, browserHistory } = require('react-router')
const routes = require('./routes')

const store = configureStore()

render(
  <Provider store={store}>
    <Router history={browserHistory} routes={routes} />
  </Provider>,
  document.getElementById('app')
)
