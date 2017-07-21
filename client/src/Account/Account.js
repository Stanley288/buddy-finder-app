import React, { Component } from 'react'
import { Route, Redirect } from 'react-router-dom'
import PropTypes from 'prop-types'
import Radium from 'radium'

import theme from 'theme'

import NavBar from './NavBar'

const styles = {
  root: {
    display: 'flex',
    height: '100%',
    width: '100%',
    padding: 50,
  },
  content: {
  },
}

class Account extends Component {
  state = {}

  render() {
    return (
      <div style={styles.root}>
        <NavBar />
        <div>
          <Redirect from="/account" to="/account/settings" />
          <Route exact path="/account/settings" component={() => <div>Settings Page</div>} />
        </div>
      </div>
    )
  }
}

Account.propTypes = {}
Account.defaultProps = {}

export default Radium(Account)
