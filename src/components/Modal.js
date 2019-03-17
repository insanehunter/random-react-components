import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import Portal from './Portal'

const Modal = ({ children, close }) => (
  <Portal>
    <StyledModal>
      {children}
    </StyledModal>
  </Portal>
)

Modal.propTypes = {
  children: PropTypes.node,
  close: PropTypes.func
}

const StyledModal = styled.div``

export default Modal
