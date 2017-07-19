import React from 'react'
import { BrowserRouter as Router, browserHistory, Route, Redirect } from 'react-router-dom'

import Welcome from './Welcome'
import Loading from './Welcome/Loading'
import Dashboard from './Dashboard'

import Auth from './auth'

const auth = new Auth()

const styles = {
  height: '100vh',
}

export default () => (
  <Router history={browserHistory}>
    <div style={styles}>
      <Route
        exact
        path="/"
        render={props => <Welcome {...props} auth={auth} />}
      />
      <Route
        exact
        path="/loading"
        render={(props) => {
          auth.handleAuthentication(props)
          return <Loading {...props} />
        }}
      />
      <Route
        path="/dashboard"
        render={props => (
          auth.isAuthenticated() ?
            <Dashboard {...props} auth={auth} /> :
            <Redirect to="/" />
        )}
      />
    </div>
  </Router>
)
