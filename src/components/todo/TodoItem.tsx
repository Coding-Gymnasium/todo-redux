import "./TodoItem.css";
import { useDispatch } from "react-redux";
import { toggleTodo, removeTodo } from "../../features/todos/todosSlice";

interface Todo {
  id: number;
  text: string;
  completed: boolean;
}

interface TodoItemProps {
  todo: Todo;
}

export default function TodoItem({ todo }: TodoItemProps) {
  const dispatch = useDispatch();

  const handleToggle = () => {
    dispatch(toggleTodo(todo.id));
  };

  const handleDelete = () => {
    dispatch(removeTodo(todo.id));
  };

  return (
    <li className="todo-item">
      <input type="checkbox" checked={todo.completed} onChange={handleToggle} />
      <span>{todo.text}</span>
      <button className="delete-btn" onClick={handleDelete}>
        X
      </button>
    </li>
  );
}
