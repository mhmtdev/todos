import React from "react";

function List({ todoList, setTodo, filter }) {
  let filteredTodo = todoList;
  if (filter === "active") {
    filteredTodo = todoList.filter((todo) => todo.isCompleted === false);
  } else if (filter === "completed") {
    filteredTodo = todoList.filter((todo) => todo.isCompleted === true);
  }

  const todoCompleted = (e) => {
    let arr = [...todoList];
    arr[e.target.value].isCompleted = e.target.checked;
    setTodo(arr);
  };

  const todoAllCompleted = (e) => {
    const arr = todoList.map((obj) => {
      return {
        text: obj.text,
        isCompleted: e.target.checked,
      };
    });

    setTodo(arr);
  };

  const todoRemove = (key) => {
    let arr = [...todoList];
    arr.splice(key, 1);
    setTodo(arr);
  };

  return (
    <div>
      <input
        className="toggle-all"
        type="checkbox"
        onChange={todoAllCompleted}
        id="toggleAll"
      />
      <label htmlFor="toggleAll">Mark all as complete</label>

      <ul className="todo-list">
        {filteredTodo.map((todo, i) => (
          <li key={i} className={todo.isCompleted ? "completed" : ""}>
            <div className="view">
              <input
                className="toggle"
                type="checkbox"
                onChange={todoCompleted}
                value={i}
                checked={todo.isCompleted}
              />
              <label>{todo.text}</label>
              <button
                className="destroy"
                onClick={() => todoRemove(i)}
              ></button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default List;
