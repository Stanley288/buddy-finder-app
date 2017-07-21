import React from 'react'
import PropTypes from 'prop-types'
import Radium from 'radium'

import theme from 'theme'

const styles = {
  suggest: {
    width: 300,
    outline: 'none',
    border: 'none',
    padding: '15px 30px',
    margin: '0 -20px',
    color: theme.color.primary,
    backgroundColor: theme.color.white,
    textAlign: 'left',
  },
}

const Suggests = ({ onSelect, suggests }) => (
  <div>
    {
      suggests.map(suggest => (
        <button
          style={styles.suggest}
          key={suggest.placeId}
          onClick={() => onSelect(suggest)}
        >
          {suggest.label}
        </button>
      ))
    }
  </div>
)

Suggests.propTypes = {
  suggests: PropTypes.arrayOf(PropTypes.object),
  onSelect: PropTypes.func,
}
Suggests.defaultProps = {
  suggests: [],
  onSelect: () => {},
}

export default Radium(Suggests)
