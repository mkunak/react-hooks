import React, { useEffect, useState, useRef } from 'react';

function App() {
  const [value, setValue] = useState("initial string");

  // 1. if we want to save value between renders without render initializing, we use useRef: 
  const renderCount = useRef(1);

  // 2. we can use useRef for referencing node element:
  const inputRef = useRef(null);

  // 3. we can have previous render value:
  const prevValue = useRef('');

  useEffect(() => {
    // 1.
    renderCount.current++;

    // 2. this is node elem input:
    console.log(inputRef.current);
    console.log(inputRef.current.value);
  });

  // 3.
  useEffect(() => {
    prevValue.current = value;
  }, [value]);

  const setFocus = () => inputRef.current.focus();

  return (
    <>
      <h2>Render quantity: {renderCount.current}</h2>
      <h3>Previous state: {prevValue.current}</h3>
      <button onClick={setFocus}>Set focus on input element</button>
      <p>Type inside of input to rerender page</p>
      <input ref={inputRef} type="text" onChange={(e) => setValue(e.target.value)} value={value} />
    </>
  );
}

export default App;
