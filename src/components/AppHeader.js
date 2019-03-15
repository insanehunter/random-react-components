import React, { useContext } from 'react'
import PropTypes from 'prop-types'
import AppStateContext from '../context/AppState'

const PageHeader = ({ history }) => {
  const { title } = useContext(AppStateContext)

  return (
    <header>
      {title}
    </header>
  )
}

PageHeader.propTypes = { // Received from the container
  history: PropTypes.object
}

export default PageHeader
