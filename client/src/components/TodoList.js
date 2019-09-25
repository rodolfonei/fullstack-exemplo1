import React, { Component } from 'react'
import { Container, ListGroup, ListGroupItem, Button } from 'reactstrap'
import { CSSTransition, TransitionGroup } from 'react-transition-group'
import uuid from 'uuid'

class TodoList extends Component {
  constructor(props) {
    super(props)
    this.state = {
      items: [
        { id: uuid(), name: 'Wash clothes'},
        { id: uuid(), name: 'Clean bathroom'},
        { id: uuid(), name: 'Read more'},
        { id: uuid(), name: 'Play a game'}
      ]
    }
    this.addTodo = this.addTodo.bind(this)
    this.delTodo = this.delTodo.bind(this)
  }

  addTodo() {
    const name = prompt('Insira Todo')
    if(name) {
      this.setState(state => ({
        items: [...state.items, { id: uuid(), name }]
      }))
    }
  }

  // FIX THIS!!!!!!!!!!!!!!!
  delTodo() {
    this.setState(state => ({
      items: state.items.filter(item => item.id !== id)
    }))
  }

  render() {
    return(
      <Container>
        <Button
          color="dark"
          className="my-3"
          onClick={this.addTodo}
        >
          Add Todo
        </Button>
        <ListGroup>
          <TransitionGroup className="todo-list">
            {this.state.items.map(({ id, name }) => (
              <CSSTransition key={id} timeout={500} classNames="fade">
                <ListGroupItem>
                  <Button
                    className="remove-btn mr-3"
                    color="danger"
                    size="sm"
                    onClick={this.delTodo(e)}
                  >&times;</Button>
                  {name}
                </ListGroupItem>
              </CSSTransition>
            ))}
          </TransitionGroup>
        </ListGroup>
      </Container>
    )
  }
}

export default TodoList