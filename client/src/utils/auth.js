import auth0 from 'auth0-js'
import { gql } from 'react-apollo'

import { authConfig } from '../config'
import { client } from '../store'

class Auth {
  auth = new auth0.WebAuth({
    domain: authConfig.domain,
    clientID: authConfig.clientId,
    redirectUri: authConfig.redirectUri,
    responseType: 'token id_token',
  })

  hostedLogin = () => {
    this.auth.authorize()
  }

  login = (username, password, history, isSignup = false) => {
    this.auth.client.login({
      realm: 'Username-Password-Authentication',
      username,
      password,
      scope: 'openid',
    }, (err, authResult) => {
      if (isSignup) {
        const data = client.mutate({
          mutation: gql`
            mutation($input:SignupInput!) {
              createUser(input:$input){
                user {
                  id
                  authId
                  email
                  contacts {
                    id
                    relationship
                  }
                  age
                  gender
                  name
                }
              }
            }
          `,
          variables: {
            input: {
              authId: authResult.accessToken,
              email: username,
            },
          },
        },
        )
      }
      // TODO: redux to save user
      this.setSession(authResult, history)
    })
  }

  signup = (email, password, history) => {
    this.auth.signup({
      connection: 'Username-Password-Authentication',
      email,
      password,
    }, (err) => {
      if (err) throw new Error(err.message)
      this.login(email, password, history, true)
    })
  }

  logout = (history) => {
    // Clear access token and ID token from local storage
    localStorage.removeItem('access_token')
    localStorage.removeItem('id_token')
    localStorage.removeItem('expires_at')
    localStorage.removeItem('email')
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
    this.auth.client.userInfo(authResult.accessToken, (err, profile) => {
      if (profile) localStorage.setItem('email', profile.email)
    })
    // navigate to dashboard
    history.push('/dashboard')
  }

  isAuthenticated = () => {
    // Check whether the current time is past the access token's expiry time
    const expiresAt = JSON.parse(localStorage.getItem('expires_at'))
    return new Date().getTime() < expiresAt
  }

  getEmail = () => localStorage.getItem('email')
}

export default new Auth()
