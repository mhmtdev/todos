import React from "react";

function Footer({ filter, setFilter, todoList, setTodo }) {

  return (
    <div>
      <span className="todo-count">
        <strong>{todoList.length} </strong>
        items left
      </span>

      <ul className="filters">
        <li>
          <a href="#/" className={filter === "all" ? "selected" : ""} onClick={() => setFilter("all")}>
            All
          </a>
        </li>
        <li>
          <a href="#/" onClick={() => setFilter("active")} className={filter === "active" ? "selected" : ""}>Active</a>
        </li>
        <li>
          <a href="#/" onClick={() => setFilter("completed")} className={filter === "completed" ? "selected" : ""}>Completed</a>
        </li>
      </ul>

      <button className="clear-completed" onClick={()=> setTodo(todoList.filter((todo) => todo.isCompleted === false))}>Clear completed</button>
    </div>
  );
}

export default Footer;
