import React, { useState } from 'react'
import PropTypes from 'prop-types'
import storage from './storage'
import { ThemeProvider } from './Context'

import { themes, defaultTheme } from '../../assets/styles/themes'

const DynamicThemeProvider = ({ children }) => {
  const [selectedTheme, setTheme] = useState(storage.value || defaultTheme)

  const toggleTheme = () => {
    const nextTheme = selectedTheme === 'light' ? 'dark' : 'light'
    storage.save(nextTheme)
    setTheme(nextTheme)
  }

  return (
    <ThemeProvider theme={{ ...themes[selectedTheme], selectedTheme, toggleTheme }}>
      {children}
    </ThemeProvider>
  )
}

DynamicThemeProvider.propTypes = {
  children: PropTypes.node
}

export default DynamicThemeProvider
