import React from 'react'
import { Link } from 'react-router-dom'
import useTitle from '../hooks/useTitle'
import Modal from '../components/Modal'
import Toggle from '../components/Toggle'
import Localized from '../components/Localized'
import LocalizationSwitcher from '../components/LocalizationSwitcher'

const MainPage = () => {
  useTitle('Main')

  return (
    <div>
      <h2><Localized stringPath='appHeader.defaultBackButtonText' /></h2>
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
    </div>
  )
}

export default MainPage
