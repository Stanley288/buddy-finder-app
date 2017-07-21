import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Geosuggest from 'react-geosuggest-updated'
import Radium from 'radium'
import { Card } from 'material-ui/Card'

import theme from 'theme'

import Suggests from './Suggests'

const styles = {
  card: {
    position: 'absolute',
    top: 60,
    left: 10,
    width: 300,
    zIndex: 1,
    padding: '0 20px',
    backgroundColor: theme.color.white,
  },
  input: {
    color: theme.color.black,
    border: theme.border.primary,
    height: 50,
    borderRadius: 25,
    padding: '0 25px',
    display: 'flex',
    alignItems: 'center',
    margin: '15px 0',
    outline: 'none',
    width: '100%',
    backgroundColor: 'transparent',
  },
  suggests: {
    display: 'none',
  },
}

class SideBar extends Component {
  state = {
    suggests: [],
  }

  getSuggests = suggests => this.setState({ suggests })

  render() {
    // TODO: define bounds
    return (
      <Card style={styles.card}>
        <Geosuggest
          style={styles}
          getSuggests={this.getSuggests}
        />
        <Suggests
          onSelect={this.props.onSelect}
          suggests={this.state.suggests}
        />
      </Card>
    )
  }
}

SideBar.propTypes = {}
SideBar.defaultProps = {}

export default Radium(SideBar)
