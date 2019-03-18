import React, { useContext } from 'react'
import styled from 'styled-components'
import LocalizationContext from '../contexts/LocalizationContext'

const LocalizationSwitcher = () => {
  const { nextLanguage, toggleLanguage } = useContext(LocalizationContext)

  return (
    <StyledSwitcher onClick={toggleLanguage}>
      {nextLanguage}
    </StyledSwitcher>
  )
}

const StyledSwitcher = styled.button``

export default LocalizationSwitcher
