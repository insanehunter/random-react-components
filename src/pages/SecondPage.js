import React from 'react'
import { Link } from 'react-router-dom'
import Toggle from '../components/Toggle'
import Localizer from '../components/Localizer'
import LoadingIndicator from '../components/LoadingIndicator'
import VisibilityManager from '../components/VisibilityManager'

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
        <VisibilityManager visible={isOpen}>
          <h2>Хоба!</h2>
        </VisibilityManager>
      </div>
    )
  }
}

export default SecondPage
