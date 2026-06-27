import React from "react";
import { useCounterStore } from "../store/counterStore";

const CounterButton = () => {
  const increaseFunction = useCounterStore((state) => state.increase);
  const decreaseFunction = useCounterStore((state) => state.decrease);

  return (
    <div>
      <button onClick={increaseFunction}>Increase count</button>
      <button onClick={decreaseFunction}>Decrease count</button>
    </div>
  );
};

export default CounterButton;
