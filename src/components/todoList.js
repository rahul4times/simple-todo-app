import React, { Component } from 'react';
import { ListGroup, ListGroupItem, Card, CardBody,
  CardTitle } from 'reactstrap';

class TodoList extends Component {

  handleDelete = (id) => {
    this.props.deleteTodo(id);
  }

  render(){
    const todoList = this.props.todoList.map((todo, i) => {

      return(
        <ListGroupItem key={i}>
          {todo}
          <input className="deleteBtn btn-danger" type="button" value="Delete"
          onClick={()=> this.handleDelete(i)} />
        </ListGroupItem>
      )
    })
    
    return(
      <Card>
        <CardBody>
          <CardTitle>Todo List</CardTitle>
          <ListGroup>
            { todoList }
          </ListGroup>
        </CardBody>
      </Card>
    );
  }
}

export default TodoList;
