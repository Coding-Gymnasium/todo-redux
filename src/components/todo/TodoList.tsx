import "./TodoList.css";
import { useSelector, useDispatch } from "react-redux";
import { addTodo } from "../../features/todos/todosSlice";
import { RootState } from "../../app/store";
import TodoItem from "./TodoItem";
import { useState } from "react";

export default function TodoList() {
  const todos = useSelector((state: RootState) => state.todos);
  const dispatch = useDispatch();
  const [newTodoText, setNewTodoText] = useState("");
  const [filter, setFilter] = useState("all");

  const filteredTodos = todos.filter((todo) => {
    if (filter === "active") return !todo.completed;
    if (filter === "completed") return todo.completed;
    return true;
  });

  const handleAddTodo = () => {
    if (newTodoText.trim()) {
      dispatch(addTodo({ text: newTodoText }));
      setNewTodoText("");
    }
  };

  return (
    <div className="todo-container">
      <h2>Todo List</h2>

      <div className="todo-form">
        <input
          type="text"
          placeholder="Add a new task"
          value={newTodoText}
          onChange={(e) => setNewTodoText(e.target.value)}
        />
        <button onClick={handleAddTodo}>Add</button>
      </div>

      <div className="filter-controls">
        <button onClick={() => setFilter("all")}>All</button>
        <button onClick={() => setFilter("active")}>Active</button>
        <button onClick={() => setFilter("completed")}>Completed</button>
      </div>

      <ul className="todo-list">
        {/* Map through todos here */}
        {filteredTodos.map((todo) => (
          <TodoItem key={todo.id} todo={todo} />
        ))}
      </ul>

      <div className="todo-count">
        {todos.filter((todo) => !todo.completed).length} items left
      </div>
    </div>
  );
}
