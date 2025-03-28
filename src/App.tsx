import "./App.css";
import Counter from "./components/counter/Counter";
import TodoList from "./components/todo/TodoList";

export default function App() {
  return (
    <div className="app">
      <h1>Todo</h1>
      <TodoList />
      <Counter />
    </div>
  );
}
