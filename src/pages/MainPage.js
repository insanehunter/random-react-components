import React from 'react'
import { Link } from 'react-router-dom'
import useTitle from '../hooks/useTitle'

const MainPage = () => {
  useTitle('Main')

  return (
    <div>
      <Link to='/second'>Next</Link>
    </div>
  )
}

export default MainPage
