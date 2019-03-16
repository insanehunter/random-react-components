import React from 'react'
import { Link } from 'react-router-dom'
import useTitle from '../hooks/useTitle'

const SecondPage = () => {
  useTitle('Second')

  return (
    <div>
      <Link to='/third'>Next</Link>
    </div>
  )
}

export default SecondPage
