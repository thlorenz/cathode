const React = require('react')
const { Component, PropTypes } = React
const Header = require('./common/Header.jsx')

class App extends Component {
  render() {
    return (
      <div>
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
