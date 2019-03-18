import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const Tag = ({ onClick, children, className = '' }) => (
  <StyledTag onClick={onClick} className={className}>
    {children}
  </StyledTag>
)

Tag.propTypes = {
  onClick: PropTypes.func,
  children: PropTypes.node,
  className: PropTypes.string
}

const StyledTag = styled.button``

export default Tag
