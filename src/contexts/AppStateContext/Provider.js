import React, { useReducer } from 'react'
import PropTypes from 'prop-types'
import reducer from './reducer'
import AppStateContext from './Context'
import initialState from './initialState'

const AppStateProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState)

  return (
    <AppStateContext.Provider value={{ ...state, dispatch }}>
      {children}
    </AppStateContext.Provider>
  )
}

AppStateProvider.propTypes = {
  children: PropTypes.node
}

export default AppStateProvider
