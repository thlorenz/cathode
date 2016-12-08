const React = require('react')
const { Route, IndexRoute } = require('react-router')
const App = require('./components/App')
const HomePage = require('./components/home/HomePage')
const AboutPage = require('./components/about/AboutPage')
const FaucetsPage = require('./components/faucet/FaucetsPage')

module.exports = (
  <Route path='/' component={App}>
    <IndexRoute component={HomePage} />
    <Route path='faucets' component={FaucetsPage} />
    <Route path='about' component={AboutPage} />
  </Route>
)
