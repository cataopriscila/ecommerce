import React from 'react'
import { Button, Image, Modal, Icon } from 'semantic-ui-react'

function ThatsAllFolks() {
  const [open, setOpen] = React.useState(false)

  return (
    <Modal
      id="thatsallfolks"
      onClose={() => setOpen(false)}
      onOpen={() => setOpen(true)}
      open={open}
      trigger={<Button
                floated="right"
                icon
                labelPosition="right"
                secondary
                size="large">
                <Icon name="payment" />                
                Payment options
                </Button>}
    >
      <Modal.Header>That's all folks!!!</Modal.Header>
      <Modal.Content image>      
        <Image size='large' src='https://gifimage.net/wp-content/uploads/2018/06/thats-all-folks-bugs-bunny-gif-6.gif/' wrapped />
        <Modal.Description>
          <h4>Thanks for the oportunity! It has been a great pleasure!</h4>
        </Modal.Description>
      </Modal.Content>
      <Modal.Actions>
        <Button onClick={() => setOpen(false)}>Cancel</Button>
        <Button onClick={() => setOpen(false)} positive>
          Ok
        </Button>
      </Modal.Actions>
    </Modal>
  )
}

export default ThatsAllFolks;


