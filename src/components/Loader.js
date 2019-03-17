import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import LoadingIndicator from './LoadingIndicator'

const Loader = ({ icon, showError, errorMessage, reload, className = '' }) => {
  return (
    <StyledLoader>
      {showError ? renderError() : <LoadingIndicator icon={icon} />}
    </StyledLoader>
  )

  function renderError() {
    return (
      <StyledError>
        <p className='message'>{errorMessage}</p>
        {reload && <button onClick={reload} className='reload-button'>Try again</button>}
      </StyledError>
    )
  }
}

Loader.propTypes = {
  icon: PropTypes.string,
  showError: PropTypes.bool,
  errorMessage: PropTypes.string,
  reload: PropTypes.func,
  className: PropTypes.string
}

const StyledLoader = styled.div``

const StyledError = styled.div``

export default Loader
