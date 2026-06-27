import React from "react";
import { useCounterStore } from "../store/counterStore";

const CounterValue = () => {
  const count = useCounterStore((state) => state.count);
  return <div>count: {count}</div>;
};

export default CounterValue;
