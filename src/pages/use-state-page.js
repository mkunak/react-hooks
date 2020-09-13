import React, { useState } from 'react';

function calcInitialCounter() {
  console.log('Calculations started...');
  return Math.trunc(Math.random() * 50);
}

function UseStatePage() {
  const counterState = useState(0);

  // DO NOT:
  // let counter2State = useState(calcInitialCounter());
  // DO: use callback, if initial state is countable:
  const counter2State = useState(() => calcInitialCounter());
  const [data, setData] = useState({
    title: 'Old title',
    date: new Date(Date.now()),
  });

  const handlePlus = ([state, setState]) => () => {
    setState(state + 1);
  };

  const handleMinus = ([state, setState]) => () => {
    state--;
    if (state < 0) state = 0;
    setState(state);
  };

  const handleDoublePlus = ([state, setState]) => () => {
    // DO NOT:
    // setState(state + 1);
    // setState(state + 1);

    // DO: use callback with prev-state parameter:
    setState((prevState) => prevState + 1);
    setState((prevState) => prevState + 1);
  };

  const handleReset = ([_, setState]) => () => setState(0);

  // another case of using callback as argument for setState-function:
  const updateString = () => {
    setData((prevData) => {
      return {
        ...prevData,
        title: 'New title',
      };
    });
  };

  return (
    <>
      <div className="text-center mt-2 mb-5">
        <h3>useState</h3>
      </div>
      <div>
        <div>
          <h4>Why?</h4>
          <div></div>
        </div>
        <div className="mt-5">
          <h4>Application:</h4>
          <div>
            <div className="mt-2">
              <h5>Counter (started from 0): <span>{counterState[0]}</span></h5>
              <button onClick={handlePlus(counterState)} className="mr-2 btn btn-success">+1</button>
              <button onClick={handleMinus(counterState)} className="mr-2 btn btn-danger">-1</button>
              <button onClick={handleDoublePlus(counterState)} className="mr-2 btn btn-success">+2</button>
              <button onClick={handleReset(counterState)} className="mr-2 btn btn-secondary">Reset</button>
            </div>
            <div className="mt-5">
              <h5>Counter2 (started from random): <span>{counter2State[0]}</span></h5>
              <button onClick={handlePlus(counter2State)} className="mr-2 btn btn-success">+1</button>
              <button onClick={handleMinus(counter2State)} className="mr-2 btn btn-danger">-1</button>
              <button onClick={handleDoublePlus(counter2State)} className="mr-2 btn btn-success">+2</button>
              <button onClick={handleReset(counter2State)} className="mr-2 btn btn-secondary">Reset</button>
            </div>
            <div className="mt-5">
              <h5>Update data</h5>
              <button onClick={updateString} className="btn btn-primary">Update</button>
              <pre>{JSON.stringify(data)}</pre>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default UseStatePage;
