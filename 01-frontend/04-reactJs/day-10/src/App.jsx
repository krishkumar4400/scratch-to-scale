import React from "react";
import { useState } from "react";

const App = () => {
  const [name, setName] = useState("");
  const [allUsers, setAllUsers] = useState([]);

  const submitHandler = (e) => {
    e.preventDefault();
    setAllUsers([...allUsers, name]);
    console.log(allUsers);
    setName("");
  };
  return (
    <div>
      <form onSubmit={submitHandler}>
        <input
          required
          value={name}
          onChange={(e) => setName(e.target.value)}
          type="text"
          placeholder="Enter your name"
        />
        <button type="submit">Submit</button>
      </form>
      <div>
        {allUsers.map((user, index) => {
          return <h2 key={index}>{user}</h2>;
        })}
      </div>
    </div>
  );
};

export default App;
