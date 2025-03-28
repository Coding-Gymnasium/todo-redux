import "./TodoItem.css";

interface Todo {
  id: number;
  text: string;
  completed: boolean;
}

interface TodoItemProps {
  todo: Todo;
}

export default function TodoItem({ todo }: TodoItemProps) {
  return (
    <li className="todo-item">
      <input type="checkbox" checked={todo.completed} />
      <span>{todo.text}</span>
      <button className="delete-btn">X</button>
    </li>
  );
}
