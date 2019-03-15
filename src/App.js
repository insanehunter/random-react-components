import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Test from './components/Test'
import { AppStateProvider } from './context/AppState'
import AppHeaderContainer from './containers/AppHeaderContainer'

const App = () => (
  <AppStateProvider>
    <Router>
      <React.Fragment>
        <AppHeaderContainer />
        <Test />
      </React.Fragment>
    </Router>
  </AppStateProvider>
)

export default App
