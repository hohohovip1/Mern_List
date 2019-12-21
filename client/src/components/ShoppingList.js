import React, { Component } from 'react';
import { Container, ListGroupItem, Button } from 'reactstrap';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import uuid from 'uuid';

class ShoppingList extends Component {
  state = {
    item: [
      { id: uuid(), name: 'Egg' },
      { id: uuid(), name: 'Milk' },
      { id: uuid(), name: 'Meat' },
      { id: uuid(), name: 'Cola' }
    ]
  }
  render() {
    const { item } = this.state;
    return (
      <Container>
        <Button
          color="dark"
          style={{ matginBottom: '2rem' }}
          onClick={() => {
            const name = prompt('Enter Item');
            if(name){
              this.setState(state => ({
                items: []
              }))
            }
          }}
        >Add Item
                </Button>
      </Container>
    );
  }
}

export default ShoppingList;