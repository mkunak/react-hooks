import React, { useEffect, useState, useRef } from 'react';

function UseRefPage() {
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
      <div className="text-center mt-2 mb-5">
        <h3>useRef</h3>
      </div>
      <div>
        <div>
          <h4>Why?</h4>
          <div></div>
        </div>
        <div>
          <h4>Application:</h4>
          <div>
            <h5>Render quantity: {renderCount.current}</h5>
            <h5>Previous state: {prevValue.current}</h5>
            <button onClick={setFocus}>Set focus on input element</button>
            <p>Type inside of input to rerender page</p>
            <input ref={inputRef} type="text" onChange={(e) => setValue(e.target.value)} value={value} />
          </div>
        </div>
      </div>
    </>
  );
}

export default UseRefPage;
