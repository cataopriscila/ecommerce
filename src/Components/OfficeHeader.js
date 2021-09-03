import React from 'react'
import { Header, Icon, Image } from 'semantic-ui-react';
import office from '../Images/office.jpg'

const OfficeHeader = () => (
  <div>
    <Header as='h2' icon textAlign='center'>
      <Icon name='pencil alternate' circular />
      <Header.Content>Office e-commerce</Header.Content>
    </Header>
    <Header  textAlign='center'>
      <Image.Group size='small'>        
          <Image src={office}/>
          <Image src={office}/>
          <Image src={office}/>          
          </Image.Group>
    </Header>   
    
  </div>
)

export default OfficeHeader;