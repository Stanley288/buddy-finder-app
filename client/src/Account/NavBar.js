import React from 'react'
import PropTypes from 'prop-types'
import Radium from 'radium'

import { Circle } from 'react-feather'

const styles = {
  root: {
  },
  option: {
    margin: '20px 0',
    fontSize: 18,
  },
  avatar: {
    textAlign: 'center',
  },
}

const NavBar = props => (
  <div style={styles.root}>
    <div style={styles.avatar}><Circle size={40} /></div>
    <div style={styles.option}>Settings</div>
    <div style={styles.option}>Events</div>
    <div style={styles.option}>Friends</div>
  </div>
)

NavBar.propTypes = {}
NavBar.defaultProps = {}

export default Radium(NavBar)
