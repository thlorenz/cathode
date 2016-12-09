const React = require('react')
const { Component } = React
const { Link } = require('react-router')

class HomePage extends Component {
  render() {
    return (
      <div className=''>
        <h1>Faucets Admin</h1>
        <p>React, Redux, and React Router in ES6 for ultra-responsive web apps.</p>
        <Link to='about' className=''>About</Link>
      </div>
    )
  }
}

module.exports = HomePage
