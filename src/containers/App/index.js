import React, { Component } from 'react'
import { MuiThemeProvider } from '@material-ui/core/styles'
import { ThemeProvider } from 'styled-components'
import {
  HashRouter,
  Route,
  Redirect,
  Switch
} from 'react-router-dom'
import muiTheme from 'configs/theme/config-theme'
import { theme as rimbleUITheme } from 'rimble-ui'
import HomeView from 'containers/HomeView'
import Header from './components/Header'
import Footer from './components/Footer'

import './styles.scss' // global styles

const combinedTheme = Object.assign({}, rimbleUITheme, muiTheme)

class App extends Component {
  render() {
    return (
      <MuiThemeProvider theme={muiTheme}>
        <ThemeProvider theme={combinedTheme}>
          <HashRouter>
            <div>
              <Header />
              <Footer />
              <div className="app-shell">
                <Switch>
                  <Route path="/home" component={HomeView} />
                  <Redirect from="/" to="/home" />
                </Switch>
              </div>
            </div>
          </HashRouter>
        </ThemeProvider>
      </MuiThemeProvider>
    )
  }
}

export default App
