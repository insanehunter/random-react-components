import React from 'react'
import { Link } from 'react-router-dom'
import useTitle from '../hooks/useTitle'
import Toggle from '../components/Toggle'
import Modal from '../components/Modal'
import LoadingIndicator from '../components/LoadingIndicator'

const MainPage = () => {
  useTitle('Main')

  return (
    <div>
      <Link to='/second'>Next</Link>
      <Toggle>
        {({ isOpen, toggle }) => (
          <div>
            <button onClick={toggle}>Show modal</button>
            {isOpen && <Modal close={toggle}><h1>Hui</h1></Modal>}
          </div>
        )}
      </Toggle>
      <LoadingIndicator icon='hourglass' />
    </div>
  )
}

export default MainPage
