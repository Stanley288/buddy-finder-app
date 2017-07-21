import React from 'react'
import PropTypes from 'prop-types'
import Radium from 'radium'
import AppBar from 'material-ui/AppBar'

import theme from 'theme'

const createStyles = ({ height }) => ({
  appBarRoot: {
    backgroundColor: theme.color.white,
    height: '100%',
  },
  title: {
    height: 'inherit',
    lineHeight: `${height}px`,
    fontWeight: 'bolder',
    fontSize: '1rem',
    color: theme.color.primary,
  },
})

const NavBar = ({ style, titleStyle, showMenuIconButton, ...props }) => {
  const styles = createStyles(style)
  return (
    <AppBar
      style={{ ...styles.appBarRoot, ...style }}
      titleStyle={styles.title}
      showMenuIconButton={false}
      {...props}
    />
  )
}

NavBar.propTypes = {
  style: PropTypes.objectOf(PropTypes.string),
  titleStyle: PropTypes.objectOf(PropTypes.string),
  showMenuIconButton: PropTypes.bool,
}
NavBar.defaultProps = {
  style: {},
  titleStyle: {},
  showMenuIconButton: false,
}

export default Radium(NavBar)
