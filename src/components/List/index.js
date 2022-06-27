import React from "react";

function List({ todoList, setTodo }) {
  const todoCompleted = (e) => {
    let arr = [...todoList];
    arr[e.target.value].isCompleted = e.target.checked;
    setTodo(arr);
  };

  return (
    <div>
      <input class="toggle-all" type="checkbox" />
      <label for="toggle-all">Mark all as complete</label>

      <ul class="todo-list">
        {todoList.map((todo, i) => (
          <li key={i} className={todo.isCompleted ? "completed" : ""}>
            <div class="view">
              <input
                class="toggle"
                type="checkbox"
                onChange={todoCompleted}
                value={i}
                checked={todo.isCompleted}
              />
              <label>{todo.text}</label>
              <button class="destroy"></button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default List;
