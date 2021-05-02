import "./App.css";
import data from "./data";
import TodoItem from "./TodoItem";
import React from "react";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      todos: data,
    };
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(id) {
    this.setState((prevState) => {
      const newData = prevState.todos.map((todo) => {
        if (todo.id === id) {
          return {
            ...todo,
            completed: !todo.completed,
          };
        }
        return todo;
      });
      return {
        todos: newData,
      };
    });
  }
  render() {
    const list = this.state.todos.map((item) => {
      return (
        <TodoItem key={item.id} todo={item} handleChange={this.handleChange} />
      );
    });
    return (
      <div class="todo-list">
        <h1>TODO LIST</h1>
        {list}
      </div>
    );
  }
}

export default App;
