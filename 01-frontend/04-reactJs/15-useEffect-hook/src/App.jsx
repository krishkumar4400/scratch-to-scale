// useEffect ?

import { useState } from "react";
import { useEffect } from "react";

const App = () => {
  const [count, setCount] = useState(0);
  const [input, setInput] = useState("");
  useEffect(() => {
    console.log("useEffect is running");
  }, [count, input]);

  return (
    <div>
      <h1>{count}</h1>
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        Click
      </button>
      <div>
        <input value={input} onChange={(e) => {
          setInput(e.target.value);
        }} type="text" placeholder="Enter text " />
      </div>
    </div>
  );
};

export default App;
