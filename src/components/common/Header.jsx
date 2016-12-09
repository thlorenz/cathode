const React = require('react')
const { Link, IndexLink } = require('react-router')

function Header() {
  return (
    <header>
      <h1>Express React Redux Example</h1>
      <nav>
        <IndexLink to='/' activeClassName='active'>Home</IndexLink>
        {' | '}
        <Link to='/faucets' activeClassName='active'>Faucets</Link>
        {' | '}
        <Link to='/about' activeClassName='active'>About</Link>
      </nav>
    </header>
  )
}

module.exports = Header
