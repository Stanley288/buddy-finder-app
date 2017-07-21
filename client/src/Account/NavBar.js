import React from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import Radium from 'radium'

import { Circle } from 'react-feather'
import theme from 'theme'

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
  link: {
    textDecoration: 'none',
    color: theme.color.black,
  },
}

const NavBar = props => (
  <div style={styles.root}>
    <div style={styles.avatar}><Circle size={40} /></div>
    <div style={styles.option}><Link style={styles.link} to="/account/settings">Settings</Link></div>
    <div style={styles.option}><Link style={styles.link} to="/account/events">Events</Link></div>
    <div style={styles.option}><Link style={styles.link} to="/account/friends">Friends</Link></div>
  </div>
)

NavBar.propTypes = {}
NavBar.defaultProps = {}

export default Radium(NavBar)
