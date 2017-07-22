import React from 'react'
import PropTypes from 'prop-types'
import Radium from 'radium'

const styles = {
  margin: 'auto',
}

const Loading = props => (
  <div style={styles}>
    Loading!
  </div>
)

Loading.propTypes = {}
Loading.defaultProps = {}

export default Radium(Loading)
