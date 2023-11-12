import React from "react";
import { useState } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);

  function increment() {
    setCount(count + 1);
  }
  function decrement() {
    setCount(count - 1);
  }

  return (
    <>
        <h1>{count}</h1>
        <button onClick={increment}>inc</button>
        <button onClick={decrement}>dec</button>
    </>
  );
}
