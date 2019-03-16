import React from 'react'
import { Link } from 'react-router-dom'
import useTitle from '../hooks/useTitle'
import useInitialData from '../hooks/useInitialData'

const ThirdPage = () => {
  useTitle('Third')
  const [data, , reload] = useInitialData('https://api.weather.gov/points/39.7456,-97.0892')

  return (
    <div>
      <Link to='/'>Next</Link>
      <div>
        <button onClick={reload}>reload</button>
      </div>
      {JSON.stringify(data)}
    </div>
  )
}

export default ThirdPage
