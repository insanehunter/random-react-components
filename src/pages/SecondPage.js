import React from 'react'
import { Link } from 'react-router-dom'
import Toggle from '../components/Toggle'
import LoadingIndicator from '../components/LoadingIndicator'

const SecondPage = () => {
  return (
    <div>
      <Link to='/third'>Next</Link>
      <Toggle>
        {({ isOpen, toggle }) => (
          <div>
            <button onClick={toggle}>Toggle message</button>
            {isOpen && <h2>Hui</h2>}
          </div>
        )}
      </Toggle>
      <LoadingIndicator icon='hourglass' />
    </div>
  )
}

export default SecondPage
