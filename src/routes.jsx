const React = require('react')
const { Route, IndexRoute } = require('react-router')
const App = require('./components/App.jsx')
const HomePage = require('./components/home/HomePage.jsx')
const AboutPage = require('./components/about/AboutPage.jsx')
const FaucetsPage = require('./components/faucet/FaucetsPage.jsx')

module.exports = (
  <Route path='/' component={App}>
    <IndexRoute component={HomePage} />
    <Route path='faucets' component={FaucetsPage} />
    <Route path='about' component={AboutPage} />
  </Route>
)
