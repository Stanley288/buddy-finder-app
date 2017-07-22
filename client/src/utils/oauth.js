import fetch from 'isomorphic-fetch'

import { authConfig } from '../config'

const request = async (username, password) => {
  const options = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      grant_type: 'password',
      username,
      password,
      client_id: authConfig.clientId,
    }),
  }

  try {
    const data = await fetch('https://buddy-finder.auth0.com/oauth/token', options)
    console.log(data)
    return data.json()
  } catch (err) {
    return err
  }
}

export default request
