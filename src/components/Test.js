import React, { useContext } from 'react'
import AppStateContext, { SET_TITLE } from '../context/AppState'

const Test = () => {
  const { dispatch } = useContext(AppStateContext)
  return <button onClick={() => dispatch({ type: SET_TITLE, payload: 'hui' })}>change title</button>
}

export default Test
