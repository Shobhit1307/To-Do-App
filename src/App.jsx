import { useState } from "react";
import Header from "./components/Header";
import AddToDo from "./components/AddToDo";
import ToDoList from "./components/ToDoList.jsx";

export default function App() {
  const [todos, setTodos] = useState([]);

  const addTodo = (text) =>
    setTodos([...todos, { id: Date.now(), text, completed: false }]);

  const updateTodo = (updated) =>
    setTodos(todos.map((t) => (t.id === updated.id ? updated : t)));

  const deleteTodo = (id) => setTodos(todos.filter((t) => t.id !== id));

  return (
    <div className="container">
  <div className="outer-div p-4">
    <Header />
    <div className=" rounded-lg shadow p-6 inner-div flex flex-col min-h-0 max-h-[45vh]">
      <AddToDo onAdd={addTodo} />
      <div className="mt-4 flex-1 overflow-y-auto min-h-0">
        <ToDoList todos={todos} onUpdate={updateTodo} onDelete={deleteTodo} />
      </div>
    </div>
  </div>
</div>
  );
}
