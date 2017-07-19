import React from 'react'
import { BrowserRouter as Router, browserHistory, Route } from 'react-router-dom'

import Welcome from './Welcome'
import Loading from './Welcome/Loading'
import Dashboard from './Dashboard'

const styles = {
  height: '100vh',
}

export default () => (
  <Router history={browserHistory}>
    <div style={styles}>
      <Route exact path="/" component={Welcome} />
      <Route exact path="/loading" component={Loading} />
      <Route path="/dashboard" component={Dashboard} />
    </div>
  </Router>
)
