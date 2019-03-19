import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const BackButton = ({ onClick, children, className = '' }) => (
  <StyledButton onClick={onClick} className={className}>
    {children}
  </StyledButton>
)

BackButton.propTypes = {
  onClick: PropTypes.func,
  children: PropTypes.node,
  className: PropTypes.string
}

const StyledButton = styled.button``

export default BackButton
