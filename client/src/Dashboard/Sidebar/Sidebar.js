import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Radium from 'radium'
import { Card } from 'material-ui/Card'

import PrimaryTextField from 'components/TextField/PrimaryTextField'

import theme from 'theme'

const styles = {
  card: {
    position: 'absolute',
    top: 60,
    left: 10,
    width: 300,
    height: 80,
    zIndex: 1,
    padding: '10px 20px',
  },
}

class SideBar extends Component {
  state = {}

  render() {
    return (
      <Card style={styles.card}>
        <PrimaryTextField
          hintText="Search for a place or event"
          onChange={this.props.onChange}
          name="search"
          value={this.props.value}
        />
      </Card>
    )
  }
}

SideBar.propTypes = {}
SideBar.defaultProps = {}

export default Radium(SideBar)
