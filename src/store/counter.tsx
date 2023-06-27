import { createStore, AnyAction } from "redux";

interface CounterState {
  counter: number;
}

const counterReducer = (
  state: CounterState = { counter: 0 },
  action: AnyAction
) => {
  if (action.type === "increment") {
    return { counter: state.counter + 1 };
  }

  if (action.type === "increase") {
    return {
      counter: state.counter + action.amount,
    };
  }

  if (action.type === "decrement") {
    return { counter: state.counter - 1 };
  }

  return state;
};

const store = createStore(counterReducer);

export default store;
