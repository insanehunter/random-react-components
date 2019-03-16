import React from 'react'
import { Link } from 'react-router-dom'
import useTitle from '../hooks/useTitle'
import useInitialData from '../hooks/useInitialData'

const MainPage = () => {
  useTitle('Main')
  const [data, , reload] = useInitialData('https://api.weather.gov/points/39.7456,-97.0892')

  return (
    <div>
      <Link to='/second'>Next</Link>
      <div>
        <button onClick={reload}>reload</button>
      </div>
      {JSON.stringify(data)}
    </div>
  )
}

export default MainPage
