import React from "react";

import "./App.css";

import withState from "./HOC/withState";

const enhance = withState("counter", "setCounter", 0);
const Counter = enhance(({ counter, setCounter }) => (
  <div>
    Count: {counter}
    <button onClick={() => setCounter((n) => n + 1)}>Increment</button>
    <button onClick={() => setCounter((n) => n - 1)}>Decrement</button>
  </div>
));

function App() {
  return (
    <div className='App'>
      <Counter />
    </div>
  );
}

export default App;
