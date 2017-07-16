import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Radium from 'radium'
import { Card } from 'material-ui/Card'

import theme from 'theme'

const styles = {
  card: {
    position: 'absolute',
    top: 60,
    left: 10,
    width: 300,
    height: 80,
    zIndex: 1,
  },
}

class SideBar extends Component {
  state = {}

  render() {
    return (
      <Card style={styles.card}>
      </Card>
    )
  }
}

SideBar.propTypes = {}
SideBar.defaultProps = {}

export default Radium(SideBar)
