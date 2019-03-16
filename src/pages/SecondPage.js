import React from 'react'
import { Link } from 'react-router-dom'
import Toggle from '../components/Toggle'
import Modal from '../components/Modal'

const SecondPage = () => {
  return (
    <div>
      <Link to='/third'>Next</Link>
      <Toggle>
        {({ isOpen, toggle }) => (
          <div>
            <button onClick={toggle}>Show modal</button>
            {isOpen && <Modal close={toggle}><h1>Hui</h1></Modal>}
          </div>
        )}
      </Toggle>
    </div>
  )
}

export default SecondPage
