import React, { useState, useMemo, useEffect } from 'react';

const makeAppSlower = (num) => {
  let i = 0;
  while (i < 999999999) i++;
  return num;
}

function UseMemoPage() {
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
      <div className="text-center mt-2 mb-5">
        <h3>useMemo</h3>
      </div>
      <div>
        <div>
          <h4>Why?</h4>
          <div></div>
        </div>
        <div>
          <h4>Application:</h4>
          <div>
            <h5>Countable feature: <span style={styles}>{calculated}</span></h5>
            <button className="btn mr-2 btn-success" onClick={() => setNumber((prev) => prev + 1)}>+1</button>
            <button className="btn mr-2 btn-danger" onClick={() => setNumber((prev) => prev - 1)}>-1</button>
            <button className="btn mr-2 btn-warning" onClick={() => setColored((prev) => !prev)}>Change color</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default UseMemoPage;
