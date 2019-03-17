import { useContext, useEffect } from 'react'
import AppStateContext, { SET_TITLE } from '../contexts/AppStateContext'

const useTitle = (title) => {
  const defaultDocumentTitle = 'Connect Club 👋'
  const { dispatch } = useContext(AppStateContext)

  useEffect(() => {
    document.title = title
    dispatch({ type: SET_TITLE, payload: title })

    return () => {
      document.title = defaultDocumentTitle
      dispatch({ type: SET_TITLE, payload: '' })
    }
  }, [])
}

export default useTitle
