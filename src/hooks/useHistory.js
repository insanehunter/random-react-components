import { useEffect, useRef } from 'react'
import history from '../history'

const useHistory = (handleChange) => {
  const unlistenRef = useRef()

  useEffect(() => {
    if (!handleChange) return
    unlistenRef.current = history.listen(() => handleChange(history))
    return () => setTimeout(unlistenRef.current)
  }, [])

  return history
}

export default useHistory
