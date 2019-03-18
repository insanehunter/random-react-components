import React, { useState } from 'react'
import PropTypes from 'prop-types'
import storage from './storage'
import { ThemeProvider } from './Context'

import getNextInArray from '../../helpers/getNextInArray'
import { themes, defaultTheme } from '../../assets/styles/themes'

const DynamicThemeProvider = ({ children }) => {
  const [selectedTheme, setTheme] = useState(storage.value || defaultTheme)

  const nextTheme = (() => {
    const availableThemes = Object.keys(themes)
    return getNextInArray(availableThemes, selectedTheme)
  })()

  const switchTheme = () => {
    storage.value = nextTheme
    setTheme(nextTheme)
  }

  return (
    <ThemeProvider theme={{ ...themes[selectedTheme], selectedTheme, switchTheme }}>
      {children}
    </ThemeProvider>
  )
}

DynamicThemeProvider.propTypes = {
  children: PropTypes.node
}

export default DynamicThemeProvider
