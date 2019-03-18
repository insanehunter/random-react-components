import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import appendClassNames from '../helpers/appendClassNames'

const Tag = ({ isSelected, onClick, children, className = '' }) => (
  <StyledTag onClick={onClick} className={appendClassNames(className, isSelected && 'selected')}>
    {children}
  </StyledTag>
)

Tag.propTypes = {
  isSelected: PropTypes.bool,
  onClick: PropTypes.func,
  children: PropTypes.node,
  className: PropTypes.string
}

const StyledTag = styled.button``

export default Tag
