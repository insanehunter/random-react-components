import { useState } from 'react'
import PropTypes from 'prop-types'

const Toggle = ({ children }) => {
  const [isOpen, setOpen] = useState(false)
  return children({ isOpen, toggle: () => setOpen(status => !status) })
}

Toggle.propTypes = {
  children: PropTypes.node
}

export default Toggle
