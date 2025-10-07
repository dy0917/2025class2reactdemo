import { useReducer, useState } from "react";

const reducer = (state, action) => { //{type: "", payload:""}
  switch (action.type) {
    case "increment":
      return state + 1;
    case "decrement":
      return state - 1;
    case "times":
      return state * state;
    default:
      return state;
  }
};

function ReducerCounter() {
  // useReducer takes a reducer function and the initial state value;
  // returns array with the state variable and a dispatch function
  const [stateCount, setStateCount] = useState(0);

  const [counter, dispatch] = useReducer(reducer, 0);
  const handleIncrement = () => {

    // we call the dispatch function to make all state updates
    dispatch({ type: "increment" });
  };
  const handleDecrement = () => {
    // dispatch takes a single argument - object passed to reducer;
    dispatch({ type: "decrement" });
  };
  const handleTimes = () => {
    dispatch({ type: "times" });
  };
  return (
    <div className="ReducerCounter componentBox">
      <h2>Count: {counter}</h2>
      <h2>stateCount: {stateCount}</h2>
      <button onClick={handleIncrement}>Reducer Increment</button>
      <button onClick={handleDecrement}>Reducer Decrement</button>
      <button onClick={handleTimes}>Reducer Times</button>
    </div>
  );
}
// see next slide for reducer function
export default ReducerCounter;
