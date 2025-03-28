import "./TodoList.css";

export default function TodoList() {
  return (
    <div className="todo-container">
      <h2>Todo List</h2>

      <div className="todo-form">
        <input type="text" placeholder="Add a new task" />
        <button>Add</button>
      </div>

      <div className="filter-controls">
        <button>All</button>
        <button>Active</button>
        <button>Completed</button>
      </div>

      <ul className="todo-list">{/* Map through todos here */}</ul>

      <div className="todo-count">5 items left</div>
    </div>
  );
};
