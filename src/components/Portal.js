import { useRef, useEffect } from 'react'
import ReactDOM from 'react-dom'

const Portal = ({ children }) => {
  const container = useRef(document.createElement('div'))

  useEffect(() => {
    document.body.appendChild(container.current)
    return () => container.current.remove()
  }, [])

  return ReactDOM.createPortal(children, container.current)
}

export default Portal
