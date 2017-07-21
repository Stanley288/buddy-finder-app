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
  render() {
    const { handleRef, suggests, getSuggests, onSelect } = this.props
    return (
      <Card style={styles.card}>
        <Geosuggest
          ref={el => handleRef(el)}
          style={styles}
          getSuggests={getSuggests}
        />
        <Suggests
          onSelect={onSelect}
          suggests={suggests}
        />
      </Card>
    )
  }
}

SideBar.propTypes = {
  suggests: PropTypes.arrayOf(PropTypes.object),
  onSelect: PropTypes.func,
  getSuggests: PropTypes.func,
  handleRef: PropTypes.func,
}
SideBar.defaultProps = {
  suggests: [],
  onSelect: () => {},
  getSuggests: () => {},
  handleRef: () => {},
}

export default Radium(SideBar)
