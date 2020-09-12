import React, { useState, useMemo, useEffect } from 'react';

const makeAppSlower = (num) => {
  let i = 0;
  while (i < 999999999) i++;
  return num;
}

function App() {
  const [number, setNumber] = useState(23);
  const [colored, setColored] = useState(false);

  // const styles = { color: colored ? 'darkred' : 'black' };
  // 2. work with objects:
  const styles = useMemo(() => ({ color: colored ? 'darkred' : 'black' }), [colored]);

  useEffect(() => console.log('Styles changed'), [styles]);

  // const calculated = makeAppSlower(number);
  // 1. with useMemo we cached state of number.
  //    If prev number === current number we do not start makeAppSlower.
  //    We take the number from cache:
  const calculated = useMemo(() => makeAppSlower(number), [number]);

  return (
    <>
      <h1>Countable feature: <span style={styles}>{calculated}</span></h1>
      <button className="btn btn-success" onClick={() => setNumber((prev) => prev + 1)}>+1</button>
      <button className="btn btn-danger" onClick={() => setNumber((prev) => prev - 1)}>-1</button>
      <button className="btn btn-warning" onClick={() => setColored((prev) => !prev)}>Change color</button>
    </>
  );
}

export default App;
