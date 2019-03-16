import { useContext, useEffect } from 'react'
import AppStateContext, { SET_TITLE } from '../context/AppStateContext'

const useTitle = (title) => {
  const { dispatch } = useContext(AppStateContext)

  useEffect(() => {
    document.title = title
    dispatch({ type: SET_TITLE, payload: title })
  }, [])
}

export default useTitle
