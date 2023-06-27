import { useSelector, useDispatch } from "react-redux";

export default function Counter() {
  const dispatch = useDispatch();
  const count = useSelector((state) => state.counter);

  const increment = () => {
    dispatch({ type: "increment" });
  };
  const decrement = () => {
    dispatch({ type: "decrement" });
  };

  const incbyfive = () => {
    dispatch({ type: "increase", amount: 5 });
  };

  return (
    <div>
      <h1>Counter: {count}</h1>
      <button onClick={increment}>Increase</button>
      <button onClick={decrement}>Decrease</button>
      <button onClick={incbyfive}>aa</button>
    </div>
  );
}
