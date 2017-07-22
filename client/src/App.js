import React from 'react'
import Helmet from 'react-helmet'
import { ApolloProvider } from 'react-apollo'
import { Provider } from 'react-redux'
import { StyleRoot } from 'radium'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import getMuiTheme from 'material-ui/styles/getMuiTheme'

import theme from 'theme'

import Routes from './routes'
import store, { client } from './store'

// Base stylesheets
import './styles/normalize.css'
import './styles/app.css'

const muiTheme = getMuiTheme({
  fontFamily: theme.fontFamily.regular,
})

function App() {
  return (
    <MuiThemeProvider muiTheme={muiTheme}>
      <ApolloProvider client={client} store={store}>
        <Provider store={store}>
          <div>
            <Helmet
              titleTemplate="%s | Some Boilerplate"
              meta={[
                { charset: 'utf-8' },
                {
                  'http-equiv': 'X-UA-Compatible',
                  content: 'IE=edge',
                },
                {
                  name: 'viewport',
                  content: 'width=device-width, initial-scale=1',
                },
              ]}
            />
            <StyleRoot>
              <Routes />
            </StyleRoot>
          </div>
        </Provider>
      </ApolloProvider>
    </MuiThemeProvider>
  )
}

export default App
