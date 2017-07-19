import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Geosuggest from 'react-geosuggest'
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
    padding: '10px 20px',
  },
  input: {
    border: `1px solid ${theme.color.primary}`,
    backgroundColor: theme.color.white,
    color: theme.color.black,
    height: 50,
    borderRadius: 25,
    padding: '0 25px',
    display: 'flex',
    alignItems: 'center',
    margin: '5px 0',
    width: '100%',
  },
  suggests: {
    display: 'none',
  },
}

class SideBar extends Component {
  state = {}

  render() {
    const { onChange, value } = this.props
    // TODO: define bounds
    return (
      <Card style={styles.card}>
        <Geosuggest
          style={styles}
        />
      </Card>
    )
  }
}

SideBar.propTypes = {}
SideBar.defaultProps = {}

export default Radium(SideBar)
