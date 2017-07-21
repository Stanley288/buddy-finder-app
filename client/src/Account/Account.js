import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Radium from 'radium'

const styles = {
  root: {
    display: 'flex',
    flexDirection: 'column',
    height: '100%',
  },
}

class Account extends Component {
  state = {}

  render() {
    return (
      <div style={styles.root}>
        Account information
      </div>
    )
  }
}

Account.propTypes = {}
Account.defaultProps = {}

export default Radium(Account)
