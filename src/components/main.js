import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';

// Components
import TodoController from './todoController';
import TodoList from './todoList';

class MainContainer extends Component {
  render(){
    return(
      <Container>
        <Row>
          <Col xs="12" sm="6">
          <br/>
            <TodoController
              addTodo={this.props.addTodo}
            />
          </Col>
          <Col xs="12" sm="6">
            <br/>
            <TodoList
              todoList={this.props.todoList}
              deleteTodo={this.props.deleteTodo}
            />
          </Col>
         </Row>
      </Container>
    );
  }
}
export default MainContainer;
