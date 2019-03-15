import React from 'react'
import Test from './components/Test'
import AppHeader from './components/AppHeader'
import { AppStateProvider } from './context/AppState'

const App = () => (
  <AppStateProvider>
    <AppHeader />
    <Test />
  </AppStateProvider>
)

export default App
