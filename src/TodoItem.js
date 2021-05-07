import React from "react";

function TodoItem(props) {
  const completedStyle = {
    fontStyle: "italic",
    color: "#cdcdcd",
    textDecoration: "line-through",
  };
  return (
    <div class="todo-item">
      <input
        class="item-check"
        type="checkbox"
        checked={props.todo.completed}
        onChange={() => props.handleChange(props.todo.id)}
      />
      <p style={props.todo.completed ? completedStyle : null}>
        {props.todo.text}
      </p>
    </div>
  );
}

export default TodoItem;
