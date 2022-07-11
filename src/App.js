import "./App.css";
import Footer from "./components/Footer";
import Form from "./components/Form";
import List from "./components/List";
import { useState } from "react";

function App() {
  const [todo, setTodo] = useState([
    {
      text: "Learn React",
      isCompleted: false,
    },
    {
      text: "Have a life!",
      isCompleted: true,
    },
  ]);

  const [filter, setFilter] = useState("all");

  return (
    <div>
      <section className="todoapp">
        <header className="header">
          <h1>todos</h1>
          <Form todoList={todo} setTodo={setTodo} />
        </header>

        <section className="main">
          <List todoList={todo} setTodo={setTodo} filter={filter} />
        </section>

        <footer className="footer">
          <Footer filter={filter} setFilter={setFilter} todoList={todo} setTodo={setTodo} />
        </footer>
      </section>
    </div>
  );
}

export default App;
