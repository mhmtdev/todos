import "./App.css";
import Footer from "./components/Footer";
import Form from "./components/Form";
import List from "./components/List";
import { useEffect, useState } from "react";

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

  useEffect(() => {
    console.log(todo);
  }, [todo]);

  return (
    <div>
      <section class="todoapp">
        <header class="header">
          <h1>todos</h1>
          <Form todoList={todo} setTodo={setTodo} />
        </header>

        <section class="main">
          <List todoList={todo} setTodo={setTodo} />
        </section>

        <footer class="footer">
          <Footer />
        </footer>
      </section>
    </div>
  );
}

export default App;
