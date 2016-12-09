const React = require('react')
const { Component, PropTypes } = React
const { connect } = require('react-redux')
const { bindActionCreators } = require('redux')
const faucetAction = require('../../actions/faucet-actions')

class FaucetsPage extends Component {
  constructor(props, context) {
    super(props, context)

    this.state = {
      faucets: { title: '' }
    }

    this.onTitleChange = this.onTitleChange.bind(this)
    this.onClickAdd = this.onClickAdd.bind(this)
  }

  onTitleChange(event) {
    const faucets = this.state.faucets
    faucets.title = event.target.value
    this.setState({
      faucets: faucets
    })
  }

  onClickAdd() {
    this.props.actions.addFaucet(this.state.faucets)
  }

  renderFaucet(faucet, index) {
    return <div key={index}>{faucet.title}</div>
  }

  render() {
    return (
      <div>
        <h1>Faucets</h1>
        {this.props.faucets.map(this.renderFaucet)}
        <h2>Add Faucet</h2>
        <input
          type='text'
          onChange={this.onTitleChange}
          value={this.state.faucets.title} />
        <input
          type='submit'
          value='Add'
          onClick={this.onClickAdd} />
      </div>
    )
  }
}

FaucetsPage.propTypes = {
  faucets: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired
}

function mapStateToProps(state, ownProps) {
  return {
    faucets: state.faucets
  }
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(faucetAction, dispatch)
  }
}

module.exports = connect(mapStateToProps, mapDispatchToProps)(FaucetsPage)
