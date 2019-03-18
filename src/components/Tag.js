import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const Tag = ({ children, onClick, className = '' }) => (
  <StyledTag className={className}>
    {children}
  </StyledTag>
)

Tag.propTypes = {
  src: PropTypes.node,
  onClick: PropTypes.func,
  className: PropTypes.string
}

const StyledTag = styled.button``

export default Tag
