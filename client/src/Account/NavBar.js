import React from 'react'
import { NavLink } from 'react-router-dom'
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
  activeLink: {
    color: theme.color.primary,
  },
}

const NavBar = () => (
  <div style={styles.root}>
    <Circle size={40} />
    <div style={styles.option}>
      <NavLink style={styles.link} activeStyle={styles.activeLink} to="/account/settings">Settings</NavLink>
    </div>
    <div style={styles.option}>
      <NavLink style={styles.link} activeStyle={styles.activeLink} to="/account/events">Events</NavLink>
    </div>
    <div style={styles.option}>
      <NavLink style={styles.link} activeStyle={styles.activeLink} to="/account/friends">Friends</NavLink>
    </div>
  </div>
)

export default Radium(NavBar)
