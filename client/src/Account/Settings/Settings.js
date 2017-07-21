import React from 'react'
import PropTypes from 'prop-types'
import Radium from 'radium'
import { Card, CardTitle, CardText } from 'material-ui'

import TextField from 'components/TextField'
import theme from 'theme'

const styles = {
  pageTitle: {
    fontSize: 24,
  },
  input: {
    color: theme.color.black,
  },
  textField: {
    border: theme.border.black,
  },
  label: {
    fontSize: 20,
    margin: '0 40px 0 0',
  },
  cardContent: {
    display: 'flex',
    alignItems: 'center',
  },
}

const Settings = props => (
  <div>
    <div style={styles.pageTitle}>Settings</div>
    <div style={theme.separator} />
    <div style={styles.cardContent}>
      <div style={styles.label}>Email</div>
      <TextField
        value="andrewgnos@gmail.com"
        textFieldStyle={styles.textField}
        inputTextStyle={styles.input}
      />
    </div>
  </div>
)

Settings.propTypes = {}
Settings.defaultProps = {}

export default Radium(Settings)
