import React from 'react'
import { Link } from 'react-router-dom'
import useTitle from '../hooks/useTitle'
import Test from '../components/Test'

const MainPage = () => {
  useTitle('Main')

  return (
    <div>
      <Link to='/second'>Next</Link>
      <Test />
    </div>
  )
}

export default MainPage
