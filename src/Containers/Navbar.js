import React, { Component } from 'react'
import { Menu, Segment } from 'semantic-ui-react'

export default class Navbar extends Component {
  state = { activeItem: 'home' }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state

    return (
      <Segment inverted>
        <Menu inverted secondary>
          <Menu.Item
            name='My Account'
            active={activeItem === 'myacount'}
            onClick={this.handleItemClick}
          />
          <Menu.Item
            name='Shopping Cart'
            href='#shoppingcart'
            active={activeItem === 'shoppingcart'}
            onClick={this.handleItemClick}
          />
          <Menu.Item
            name='Checkout'
            href='#checkout'
            active={activeItem === 'checkout'}
            onClick={this.handleItemClick}
          />
        </Menu>
      </Segment>
    )
  }
}