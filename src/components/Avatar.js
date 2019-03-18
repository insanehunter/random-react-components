import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import userIcon from '../assets/images/icons/user.svg'

const Avatar = ({ src, alt = '', className = '' }) => (
  <StyledAvatar className={className}>
    <img src={src || userIcon} alt={alt} className='image' />
  </StyledAvatar>
)

Avatar.propTypes = {
  src: PropTypes.string,
  alt: PropTypes.string,
  className: PropTypes.string
}

const StyledAvatar = styled.span`
  display: inline-block;
  width: 114px;
  height: 114px;
  text-align: center;
  border-radius: 50%;
  overflow: hidden;

  .image {
    width: 100%;
    height: 100%;
    object-fit: cover;
    vertical-align: middle;
  }
`

export default Avatar
