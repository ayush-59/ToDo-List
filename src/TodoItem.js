import React from "react";

function TodoItem(props) {
  return (
    <div class="todo-item">
      <input
        class="item-check"
        type="checkbox"
        checked={props.todo.completed}
        onChange={() => props.handleChange(props.todo.id)}
      />
      <p
        style={{
          textDecoration: props.todo.completed && "line-through",
        }}
      >
        {props.todo.text}
      </p>
    </div>
  );
}

export default TodoItem;
