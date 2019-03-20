import React from 'react'
import { Link } from 'react-router-dom'
import Toggle from '../components/Toggle'
import Localizer from '../components/Localizer'
import DisplayManager from '../components/DisplayManager'
import LoadingIndicator from '../components/LoadingIndicator'

const SecondPage = () => {
  return (
    <div>
      <Link to='/third'>Next</Link>
      <Toggle isOpenByDefault>{renderToggle}</Toggle>
      <Localizer stringPath='loadingIndicator.loading'>
        {localizedString => <LoadingIndicator icon='hourglass' alt={localizedString} />}
      </Localizer>
    </div>
  )

  function renderToggle({ isOpen, toggle }) {
    return (
      <div>
        <button onClick={toggle}>Toggle message</button>
        <DisplayManager visible={isOpen}>
          <h2>Hui</h2>
        </DisplayManager>
      </div>
    )
  }
}

export default SecondPage
