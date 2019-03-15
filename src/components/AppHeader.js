import React, { useContext } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import BackButton from './BackButton'
import AppStateContext from '../context/AppState'

const PageHeader = ({ history }) => {
  console.log(history)
  const { title, leftHeaderButtons, rightHeaderButtons } = useContext(AppStateContext)

  return (
    <StyledHeader>
      <div className='buttons-block'>
        {!!history.length && <BackButton handleClick={history.goBack} className='back-button'>Nazad</BackButton>}
        {renderButtons(leftHeaderButtons)}
      </div>
      {title}
      <div className='buttons-block'>
        {renderButtons(rightHeaderButtons)}
      </div>
    </StyledHeader>
  )

  function renderButtons(components) {
    return components.map((Component, index) => <Component key={index} />)
  }
}

PageHeader.propTypes = { // Received from the container
  history: PropTypes.object
}

const StyledHeader = styled.header``

export default PageHeader
