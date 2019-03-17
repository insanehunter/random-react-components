import React from 'react'
import PropTypes from 'prop-types'

import rollingIcon from '../assets/icons/rolling.svg'
import hourglassIcon from '../assets/icons/hourglass.svg'

const LoadingIndicator = ({ icon = 'rolling', className = '' }) => {
  const iconsMap = {
    'rolling': rollingIcon,
    'hourglass': hourglassIcon
  }

  return <img src={iconsMap[icon]} alt='Loading...' className={className} />
}

LoadingIndicator.propTypes = {
  icon: PropTypes.string,
  className: PropTypes.string
}

export default LoadingIndicator
