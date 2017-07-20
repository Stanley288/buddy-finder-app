import React from 'react'
import PropTypes from 'prop-types'
import Radium from 'radium'

import theme from 'theme'

const styles = {
  suggest: {
    outline: 'none',
    border: 'none',
    width: '100%',
    padding: '15px 10px',
    color: theme.color.primary,
    backgroundColor: theme.color.white,
    borderRadius: theme.borderRadius.regular,
  },
}

const Suggests = ({ onSelect, suggests }) => (
  <div>
    {
      suggests.map(suggest => (
        <button
          style={styles.suggest}
          key={suggest.placeId}
          onClick={onSelect}
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
