import React from 'react'
import { Link } from 'react-router-dom'
import Toggle from '../components/Toggle'

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
    </div>
  )
}

export default SecondPage
