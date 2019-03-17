import React, { useContext } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import ThemeContext from '../contexts/ThemeContext'

const ThemeSwitcher = ({ className = '' }) => {
  const { toggleTheme, selectedTheme } = useContext(ThemeContext)

  return (
    <StyledButton onClick={toggleTheme} className={className}>
      {selectedTheme === 'light' ? '🌒' : '☀️'}
    </StyledButton>
  )
}

ThemeSwitcher.propTypes = {
  className: PropTypes.string
}

const StyledButton = styled.button``

export default ThemeSwitcher
