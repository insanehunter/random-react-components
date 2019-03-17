import React, { useContext } from 'react'
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

const StyledButton = styled.button``

export default LocalizationSwitcher
