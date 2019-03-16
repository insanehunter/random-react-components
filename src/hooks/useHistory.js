import { useEffect, useRef } from 'react'
import history from '../history'

const useHistory = (onChangeHandler) => {
  const unlistenRef = useRef()

  useEffect(() => {
    if (!onChangeHandler) return
    unlistenRef.current = history.listen(() => onChangeHandler(history))
    return () => setTimeout(unlistenRef.current)
  }, [])

  return history
}

export default useHistory
