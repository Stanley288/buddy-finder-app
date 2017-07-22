import React, { Component } from 'react'
import PropTypes from 'prop-types'

import PrimaryButton from 'components/Button/PrimaryButton'
import TextField from 'components/TextField'
import { signup, login } from 'utils/webAuth'
import theme from 'theme'

const styles = {
  root: {
    height: '100%',
    backgroundColor: theme.color.black,
    display: 'flex',
    justifyContent: 'center',
    textAlign: 'center',
  },
  logo: {
    fontSize: 60,
    color: theme.color.primary,
  },
  slogan: {
    fontSize: 30,
    color: theme.color.white,
    margin: '0 0 20px',
  },
  content: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    alignSelf: 'center',
  },
  buttons: {
    width: 150,
    margin: '20px 0 0',
  },
}

class Welcome extends Component {
  state = {
    username: '',
    password: '',
  }

  handleInputChange = (e) => {
    const { value, name } = e.target

    this.setState({
      [name]: value,
    })
  }

  login = async () => {
    this.props.auth.login(this.state.username, this.state.password, this.props.history)
  }

  signup = () => {
    this.props.auth.signup(this.state.username, this.state.password, this.props.history)
  }

  render() {
    const { auth } = this.props
    return (
      <div style={styles.root}>
        <div style={styles.content}>
          <div style={styles.logo}>B<small>F</small></div>
          <div style={styles.slogan}>Insert our fancy slogan here</div>
          <TextField hintText="Username" value={this.state.username} name="username" onChange={this.handleInputChange} />
          <TextField type="password" hintText="Password" value={this.state.password} name="password" onChange={this.handleInputChange} />
          <PrimaryButton rootStyle={styles.buttons} onClick={this.login}>Log In</PrimaryButton>
          <PrimaryButton rootStyle={styles.buttons} onClick={this.signup}>Sign Up</PrimaryButton>
        </div>
      </div>
    )
  }
}

Welcome.propTypes = {}
Welcome.defaultProps = {}

export default Welcome
