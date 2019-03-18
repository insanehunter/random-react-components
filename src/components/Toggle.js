import { useState } from 'react'
import PropTypes from 'prop-types'

const Toggle = ({ children, isOpenByDefault = false }) => {
  const [isOpen, setOpen] = useState(isOpenByDefault)
  return children({ isOpen, toggle: () => setOpen(status => !status) })
}

Toggle.propTypes = {
  children: PropTypes.func
}

export default Toggle
