import React, { useState, useCallback } from 'react';
import ItemList from '../components/ItemList';

function UseCallbackPage() {
  const [colored, setColored] = useState(false);
  const [count, setCount] = useState(1);

  const styles = { color: colored ? 'darkred' : 'black' };

  // const generateItems = (num) => {
  //   return new Array(count).fill('').map((_, i) => `Element ${i + num}`);
  // };
  // useCallback vs. useMemo, we use to cache FUNCTION, but NOT the RESULT of function call:
  const generateItems = useCallback((num = 1) => {
    return new Array(count).fill('').map((_, i) => `Element ${i + num}`);
  }, [count]);

  const handleMinus = () => {
    setCount((prev) => {
      if (prev < 1) prev = 1;
      return prev - 1;
    });
  };

  return (
    <>
      <div className="text-center mt-2 mb-5">
        <h3>useCallback</h3>
      </div>
      <div>
        <div>
          <h4>Why?</h4>
          <div></div>
        </div>
        <div>
          <h4>Application:</h4>
          <div>
            <h5>Countable feature: <span style={styles}>{count}</span></h5>
            <button className="btn btn-success mr-2" onClick={() => setCount((prev) => prev + 1)}>+1</button>
            <button className="btn btn-danger mr-2" onClick={handleMinus}>-1</button>
            <button className="btn btn-warning mr-2" onClick={() => setColored((prev) => !prev)}>Change color</button>

            <ItemList getItems={generateItems} />
          </div>
        </div>
      </div>
    </>
  );
}

export default UseCallbackPage;
