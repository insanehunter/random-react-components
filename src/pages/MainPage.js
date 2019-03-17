import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import useTitle from '../hooks/useTitle'
import Modal from '../components/Modal'
import Toggle from '../components/Toggle'
import Localizer from '../components/Localizer'
import ThemeSwitcher from '../components/ThemeSwitcher'
import LocalizationSwitcher from '../components/LocalizationSwitcher'

const MainPage = () => {
  useTitle('Main')

  return (
    <div>
      <StyledTitle>
        <Localizer stringPath='appHeader.defaultBackButtonText' />
      </StyledTitle>

      <Link to='/second'>Next</Link>

      <Toggle>
        {({ isOpen, toggle }) => (
          <div>
            <button onClick={toggle}>Show modal</button>
            {isOpen && <Modal close={toggle}><h1>Hui</h1></Modal>}
          </div>
        )}
      </Toggle>
      <LocalizationSwitcher />
      <ThemeSwitcher />
    </div>
  )
}

const StyledTitle = styled.h1`
  color: ${props => props.theme.fontColor};
`

export default MainPage
