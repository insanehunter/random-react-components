import React from 'react'
import styled from 'styled-components'
import Portal from './Portal'

const Modal = ({ children, close }) => (
  <Portal>
    <ModalWrapper>
      {children}
    </ModalWrapper>
  </Portal>
)

const ModalWrapper = styled.div``

export default Modal
