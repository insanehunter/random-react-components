import React from 'react'
import { Router, Switch, Route } from 'react-router-dom'
import { AppStateProvider } from './context/AppStateContext'
import AppHeader from './components/AppHeader'

import MainPage from './pages/MainPage'
import SecondPage from './pages/SecondPage'
import ThirdPage from './pages/ThirdPage'

import history from './history'

const App = () => (
  <AppStateProvider>
    <Router history={history}>
      <React.Fragment>
        <AppHeader />
        <Switch>
          <Route path='/' exact component={MainPage} />
          <Route path='/second' component={SecondPage} />
          <Route path='/third' component={ThirdPage} />
        </Switch>
      </React.Fragment>
    </Router>
  </AppStateProvider>
)

export default App
