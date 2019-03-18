import React, { useContext } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import ThemeContext from '../contexts/ThemeContext'

const ThemeSwitcher = ({ className = '' }) => {
  const { toggleTheme, selectedTheme } = useContext(ThemeContext)

  return (
    <StyledSwitcher onClick={toggleTheme} className={className}>
      {selectedTheme === 'light' ? '🌒' : '☀️'}
    </StyledSwitcher>
  )
}

ThemeSwitcher.propTypes = {
  className: PropTypes.string
}

const StyledSwitcher = styled.button``

export default ThemeSwitcher
