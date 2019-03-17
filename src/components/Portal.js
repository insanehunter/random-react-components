import { useRef, useEffect } from 'react'
import PropTypes from 'prop-types'
import ReactDOM from 'react-dom'

const Portal = ({ children }) => {
  const container = useRef(document.createElement('div'))

  useEffect(() => {
    document.body.appendChild(container.current)
    return () => container.current.remove()
  }, [])

  return ReactDOM.createPortal(children, container.current)
}

Portal.propTypes = {
  children: PropTypes.node
}

export default Portal
