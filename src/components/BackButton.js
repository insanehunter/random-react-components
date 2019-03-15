import React from 'react'
import PropTypes from 'prop-types'

const BackButton = ({ handleClick, children, className = '' }) => (
  <button onClick={handleClick} className={className}>{children}</button>
)

BackButton.propTypes = {
  children: PropTypes.node,
  handleClick: PropTypes.func,
  className: PropTypes.string
}

export default BackButton
