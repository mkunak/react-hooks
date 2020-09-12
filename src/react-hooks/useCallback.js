import React, { useState, useCallback } from 'react';
import ItemList from './components/ItemList';

function App() {
  const [colored, setColored] = useState(false);
  const [count, setCount] = useState(1);

  const styles = { color: colored ? 'darkred' : 'black' };

  // const generateItems = (num) => {
  //   return new Array(count).fill('').map((_, i) => `Element ${i + num}`);
  // };
  // useCallback vs. useMemo, we use to cache FUNCTION, but NOT the RESULT of function call:
  const generateItems = useCallback((num = 0) => {
    return new Array(count).fill('').map((_, i) => `Element ${i + num}`);
  }, [count]);

  return (
    <>
      <h1>Countable feature: <span style={styles}>{count}</span></h1>
      <button className="btn btn-success mr-2" onClick={() => setCount((prev) => prev + 1)}>+1</button>
      <button className="btn btn-danger mr-2" onClick={() => setCount((prev) => prev - 1)}>-1</button>
      <button className="btn btn-warning mr-2" onClick={() => setColored((prev) => !prev)}>Change color</button>

      <ItemList getItems={generateItems} />
    </>
  );
}

export default App;
