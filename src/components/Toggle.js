import { useState } from 'react'

const Toggle = ({ children }) => {
  const [isOpen, setOpen] = useState(false)
  return children({ isOpen, toggle: () => setOpen(status => !status) })
}

export default Toggle
