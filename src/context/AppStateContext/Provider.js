import React, { useReducer } from 'react'
import initialState from './initialState'
import AppStateContext from './Context'
import reducer from './reducer'

const AppStateProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState)

  return (
    <AppStateContext.Provider value={{ ...state, dispatch }}>
      {children}
    </AppStateContext.Provider>
  )
}

export default AppStateProvider
