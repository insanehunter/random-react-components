import React from 'react'
import { Link } from 'react-router-dom'
import useTitle from '../hooks/useTitle'
import Toggle from '../components/Toggle'

const MainPage = () => {
  useTitle('Main')

  return (
    <div>
      <Link to='/second'>Next</Link>
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

export default MainPage
