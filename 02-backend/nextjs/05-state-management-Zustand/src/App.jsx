import React from "react";
import Counter from "./components/Counter";
import Navbar from "./components/Navbar";
import Posts from "./components/Posts";

const App = () => {
  return (
    <div>
      <Counter />

      <div
        style={{
          margin: "50px",
          width: "100vw",
          border: "2px solid black",
          padding: "20px",
        }}
      >
        <Navbar />
      </div>
      <h1>Posts: ----------</h1>
      <Posts />
    </div>
  );
};

export default App;
