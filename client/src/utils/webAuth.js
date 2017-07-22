import fetch from 'isomorphic-fetch'
import auth from 'utils/auth'

import { authConfig } from '../config'

const signup = async (email, password) => {
  try {
    auth.auth.signup({
      connection: 'CONNECTION',
      email,
      password,
    }, (err, args) => {
      if (err) throw new Error(err.message)
      console.log(args)
    })
  } catch (err) {
    return err
  }
  return { status: 'success' }
}

const login = async (username, password) => {
  const options = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      grant_type: 'password',
      audience: 'https://buddy-finder.auth0.com/api/v2/',
      username,
      password,
      client_id: authConfig.clientId,
    }),
  }

  try {
    const data = await fetch('https://buddy-finder.auth0.com/oauth/token', options)
    return data.json()
  } catch (err) {
    return err
  }
}

export default {
  signup,
  login,
}
