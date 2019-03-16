import React from 'react'
import { Link } from 'react-router-dom'
import useTitle from '../hooks/useTitle'

const ThirdPage = () => {
  useTitle('Third')

  return (
    <div>
      <Link to='/'>Next</Link>
    </div>
  )
}

export default ThirdPage
