import React, { useContext } from 'react'
import styled from 'styled-components'
import LocalizationContext from '../contexts/LocalizationContext'

const LocalizationSwitcher = () => {
  const { nextLanguage, switchLanguage } = useContext(LocalizationContext)

  return (
    <StyledSwitcher onClick={switchLanguage}>
      {nextLanguage}
    </StyledSwitcher>
  )
}

const StyledSwitcher = styled.button``

export default LocalizationSwitcher
