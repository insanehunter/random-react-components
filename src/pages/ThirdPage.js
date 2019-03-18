import React from 'react'
import { Link } from 'react-router-dom'
import useTitle from '../hooks/useTitle'
import useInitialData from '../hooks/useInitialData'
import Avatar from '../components/Avatar'

const ThirdPage = () => {
  useTitle('Third')
  const [data] = useInitialData('https://api.weather.gov/gridpoints/TOP/31,80')

  return (
    <div>
      <Link to='/'>Next</Link>
      <br /><br />
      <Avatar />
      <div>
        {data && JSON.stringify(data)}
      </div>
    </div>
  )
}

export default ThirdPage
