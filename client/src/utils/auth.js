import auth0 from 'auth0-js'

import { authConfig } from '../config'

// temporary hosted login page
// TODO: custom login page with client grants

class Auth {
  auth = new auth0.WebAuth({
    domain: authConfig.domain,
    clientID: authConfig.clientId,
    redirectUri: authConfig.redirectUri,
    responseType: 'token id_token',
  })

  login = () => {
    this.auth.authorize()
  }

  logout = (history) => {
    // Clear access token and ID token from local storage
    localStorage.removeItem('access_token')
    localStorage.removeItem('id_token')
    localStorage.removeItem('expires_at')
    // navigate to login page
    history.push('/')
  }

  handleAuthentication = (props) => {
    if (/access_token|id_token|error/.test(props.location.hash)) {
      this.auth.parseHash((err, authResult) => {
        if (authResult && authResult.accessToken && authResult.idToken) {
          this.setSession(authResult, props.history)
        } else if (err) {
          console.log(err)
        }
      })
    }
  }

  setSession = (authResult, history) => {
    // Set the time that the access token will expire at
    const expiresAt = JSON.stringify((authResult.expiresIn * 1000) + new Date().getTime())
    localStorage.setItem('access_token', authResult.accessToken)
    localStorage.setItem('id_token', authResult.idToken)
    localStorage.setItem('expires_at', expiresAt)
    // navigate to dashboard
    history.push('/dashboard')
  }

  isAuthenticated = () => {
    // Check whether the current time is past the access token's expiry time
    const expiresAt = JSON.parse(localStorage.getItem('expires_at'))
    return new Date().getTime() < expiresAt
  }
}

export default new Auth()
