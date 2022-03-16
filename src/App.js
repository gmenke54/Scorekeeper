import './App.css';
import React, { useState } from 'react';

function App() {
  const [count, setCount] = useState(null);
  setCount(window.localStorage.getItem('count'));
  const incrementCount = () => {
    let curCount = count + 1;
    setCount(curCount);
    window.localStorage.setItem('count', curCount);
  };

  return (
    <div className="App">
      <div onClick={incrementCount}>+</div>
      <div>{count}</div>
    </div>
  );
}

export default App;
