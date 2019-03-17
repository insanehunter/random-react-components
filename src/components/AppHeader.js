import React, { useContext } from 'react'
import styled from 'styled-components'
import BackButton from './BackButton'
import useHistory from '../hooks/useHistory'
import AppStateContext, { PUSH_TITLE_TO_HISTORY, POP_LAST_SAVED_TITLE } from '../context/AppStateContext'

const PageHeader = () => {
  const history = useHistory(handleHistoryChange)
  const { title, visitedPages, leftHeaderButtons, rightHeaderButtons, dispatch } = useContext(AppStateContext)

  return (
    <StyledHeader>
      <div className='buttons-block'>
        {renderBackButton()}
        {renderButtons(leftHeaderButtons)}
      </div>
      <div className='title-wrapper'>
        <span className='title'>{title}</span>
      </div>
      <div className='buttons-block'>
        {renderButtons(rightHeaderButtons)}
      </div>
    </StyledHeader>
  )

  function handleHistoryChange({ action }) {
    if (action === 'PUSH') dispatch({ type: PUSH_TITLE_TO_HISTORY })
    else if (action === 'POP') dispatch({ type: POP_LAST_SAVED_TITLE })
  }

  function renderBackButton() {
    const hasHistory = !!visitedPages.length
    const defaultBackButtonText = 'Back'
    const backButtonText = hasHistory && (visitedPages[visitedPages.length - 1] || defaultBackButtonText)
    return hasHistory && <BackButton handleClick={history.goBack} className='back-button'>{backButtonText}</BackButton>
  }

  function renderButtons(components) {
    return components.map((Component, index) => <Component key={index} />)
  }
}

const StyledHeader = styled.header``

export default PageHeader
