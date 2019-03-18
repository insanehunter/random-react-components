import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const BackButton = ({ handleClick, children, className = '' }) => (
  <StyledButton onClick={handleClick} className={className}>
    {children}
  </StyledButton>
)

BackButton.propTypes = {
  handleClick: PropTypes.func,
  children: PropTypes.node,
  className: PropTypes.string
}

const StyledButton = styled.button``

export default BackButton
