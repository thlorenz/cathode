const React = require('react')
const { Component, PropTypes } = React
const Header = require('./common/Header')

class App extends Component {
  render() {
    return (
      <div className='build-container'>
        <Header />
        {this.props.children}
      </div>
    )
  }
}

App.propTypes = {
  children: PropTypes.object.isRequired
}

module.exports = App
