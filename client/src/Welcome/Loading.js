import React, { Component } from 'react'
import { withApollo } from 'react-apollo'
import PropTypes from 'prop-types'
import Radium from 'radium'

import Auth from 'utils/auth'

const styles = {
  margin: 'auto',
}

class Loading extends Component {
  render() {
    return (
      <div style={styles}>Loading...</div>
    )
  }
}

Loading.propTypes = {}
Loading.defaultProps = {}

export default withApollo(Radium(Loading))
