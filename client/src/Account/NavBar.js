import React from 'react'
import { Link } from 'react-router-dom'
import Radium from 'radium'

import { Circle } from 'react-feather'
import theme from 'theme'

const styles = {
  root: {
    width: 200,
    textAlign: 'left',
  },
  optionsList: {
    textAlign: 'left',
  },
  option: {
    margin: '20px 0',
    fontSize: 18,
  },
  link: {
    textDecoration: 'none',
    color: theme.color.black,
  },
}

const NavBar = () => (
  <div style={styles.root}>
    <Circle size={40} />
    <div style={styles.option}><Link style={styles.link} to="/account/settings">Settings</Link></div>
    <div style={styles.option}><Link style={styles.link} to="/account/events">Events</Link></div>
    <div style={styles.option}><Link style={styles.link} to="/account/friends">Friends</Link></div>
  </div>
)

export default Radium(NavBar)
