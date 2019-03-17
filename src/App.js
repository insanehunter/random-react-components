import React from 'react'
import { Router, Switch, Route } from 'react-router-dom'

import { AppStateProvider } from './contexts/AppStateContext'
import { LocalizationProvider } from './contexts/LocalizationContext'

import AppHeader from './components/AppHeader'

import MainPage from './pages/MainPage'
import SecondPage from './pages/SecondPage'
import ThirdPage from './pages/ThirdPage'

import history from './history'

const App = () => (
  <CompositedProviders>
    <AppHeader />
    <Switch>
      <Route path='/' exact component={MainPage} />
      <Route path='/second' component={SecondPage} />
      <Route path='/third' component={ThirdPage} />
    </Switch>
  </CompositedProviders>
)

const CompositedProviders = ({ children }) => (
  <AppStateProvider>
    <LocalizationProvider>
      <Router history={history}>
        <React.Fragment>
          {children}
        </React.Fragment>
      </Router>
    </LocalizationProvider>
  </AppStateProvider>
)

export default App
