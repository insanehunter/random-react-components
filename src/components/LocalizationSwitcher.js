import React, { useContext } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import LocalizationContext from '../contexts/LocalizationContext'

const LocalizationSwitcher = () => {
  const { nextLanguage, toggleLanguage } = useContext(LocalizationContext)

  return (
    <StyledButton onClick={toggleLanguage}>
      {nextLanguage}
    </StyledButton>
  )
}

LocalizationSwitcher.propTypes = { // Received from the container
  nextLanguage: PropTypes.string,
  toggleLanguage: PropTypes.func
}

const StyledButton = styled.button``

export default LocalizationSwitcher
