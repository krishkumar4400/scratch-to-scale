"use client";

import { useState } from "react";

const page = () => {
  const [count, setCount] = useState(1);
  return (
    <div>
      <h1>Home Page</h1>
      <h2>{count}</h2>
    </div>
  );
};

export default page;
