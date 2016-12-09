const React = require('react')
const { Component } = React

class AboutPage extends Component {
  render() {
    return (
      <div>
        <h1>About</h1>
        <p>This application uses React, Redux, React Router and magical libraries.</p>
        <p>It was built by hand in order to understand each piece.</p>
      </div>
    )
  }
}

module.exports = AboutPage
