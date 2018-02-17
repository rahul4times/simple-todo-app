import React, { Component } from 'react';
import { Form, FormGroup, Input, Card, CardBody,
  CardTitle } from 'reactstrap';



class TodoController extends Component {
  state = {
    todo:''
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.addTodo(this.state.todo);
    this.setState({todo: ''});
  }

  render(){

    return(
      <Card>
        <CardBody>
          <CardTitle>Add Todo</CardTitle>
          <Form onSubmit={this.handleSubmit}>
            <FormGroup>
              <Input
                value={this.state.todo}
                onChange={(e)=>this.setState({todo: e.target.value})}
                type="text" name="todo"
                required
                placeholder="Enter todo" />
            </FormGroup>
            <input className="btn-primary" type="submit" value="Add" />
          </Form>
        </CardBody>
      </Card>
    );
  }
}

export default TodoController;
