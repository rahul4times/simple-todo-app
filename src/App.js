import React, { Component } from 'react';
import TopHeader from './components/header';
import MainContainer from './components/main';

class App extends Component {
  state = {
    todo:[]
  }

  addTodo = (input) => {
    this.setState({todo: this.state.todo.concat(input)});
  }

  deleteTodo = (input) => {
    const updatedState = this.state.todo.filter((todo, i) => {
      return i !== input;
    });

    this.setState({todo: updatedState});
  }

  render() {
    return (
      <div>
        <TopHeader />
        <MainContainer
          addTodo={this.addTodo}
          deleteTodo={this.deleteTodo}
          todoList={this.state.todo}
        />
      </div>
    );
  }
}

export default App;
