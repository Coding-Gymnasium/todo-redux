import "./Counter.css";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../app/store";
import {
  decrementCounter,
  incrementCounter,
  resetCounter,
} from "../../features/counter/counterSlice";

export default function Counter() {
  const counter = useSelector((state: RootState) => state.counter);
  const dispatch = useDispatch();

  return (
    <div className="counter-container">
      <h2>Counter</h2>
      <div className="counter-display">{counter}</div>
      <div className="counter-controls">
        <button onClick={() => dispatch(decrementCounter())}>-</button>
        <button onClick={() => dispatch(resetCounter())}>Reset</button>
        <button onClick={() => dispatch(incrementCounter())}>+</button>
      </div>
    </div>
  );
}
