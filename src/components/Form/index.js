import React from "react";

function Form({ todoList, setTodo }) {
  const todoAdd = (e) => {
    if (e.key === "Enter") {
      setTodo([...todoList, {text: e.target.value, isCompleted: false}]);
      e.target.value = "";
    }
  };

  return (
    <div>
      <input
        className="new-todo"
        placeholder="What needs to be done?"
        autoFocus
        onKeyDown={todoAdd}
      />
    </div>
  );
}

export default Form;
