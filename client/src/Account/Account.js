import React, { Component } from 'react'
import { Route, Redirect } from 'react-router-dom'
import Radium from 'radium'

import NavBar from './NavBar'
import Settings from './Settings'

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
          <Route exact path="/account/settings" component={Settings} />
          <Route exact path="/account/events" component={() => <div>Events Page</div>} />
          <Route exact path="/account/friends" component={() => <div>Friends Page</div>} />
        </div>
      </div>
    )
  }
}

Account.propTypes = {}
Account.defaultProps = {}

export default Radium(Account)
