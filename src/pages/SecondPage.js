import React from 'react'
import { Link } from 'react-router-dom'
import Toggle from '../components/Toggle'
import Localizer from '../components/Localizer'
import LoadingIndicator from '../components/LoadingIndicator'

const SecondPage = () => {
  return (
    <div>
      <Link to='/third'>Next</Link>
      <Toggle>{renderToggle}</Toggle>
      <Localizer stringPath='loadingIndicator.loading' render={localizedString => (
        <LoadingIndicator icon='hourglass' alt={localizedString} />
      )} />
    </div>
  )

  function renderToggle({ isOpen, toggle }) {
    return (
      <div>
        <button onClick={toggle}>Toggle message</button>
        {isOpen && <h2>Hui</h2>}
      </div>
    )
  }
}

export default SecondPage
