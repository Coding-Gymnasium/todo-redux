import "./Counter.css";

export default function Counter() {
  return (
    <div className="counter-container">
      <h2>Counter</h2>
      <div className="counter-display">0</div>
      <div className="counter-controls">
        <button>-</button>
        <button>Reset</button>
        <button>+</button>
      </div>
    </div>
  );
}
