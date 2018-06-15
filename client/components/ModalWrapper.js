import React from 'react'
import {Modal, Button} from 'semantic-ui-react'

const ModalWrapper = props => {
  const {triggerButton} = props
  return (
    <Modal trigger={<Button primary>{triggerButton}</Button>}>
      <Modal.Header>
        Choose From the Menus Below to Find Incredible Guitar Solos (all fields
        are optional)
      </Modal.Header>
      <Modal.Content>{props.children}</Modal.Content>
    </Modal>
  )
}

export default ModalWrapper
