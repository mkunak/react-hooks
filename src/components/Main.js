import React from 'react';
import { useAlert } from './alert/AlertContext';

export default function Main() {
  const { show } = useAlert();

  return (
    <>
      <div className="text-center mt-2 mb-4">
        <h3>useContext + useReducer</h3>
      </div>
      <div>
        <div>
          <h4>Why?</h4>
          <div className="ml-5">
            <p className="bg-warning mt-1 mb-1 p-2">useContext: We use <strong>useContext</strong> in order to get context value from child component of Context.Provider wrapper</p>
            <p className="bg-warning mt-1 mb-1 p-2">useContext: And we don't need to wrapp the child component with <strong>Context.Consumer</strong>!</p>
            <p className="bg-info mt-1 mb-1 p-2">useReducer: We use <strong>useReducer</strong> in order to create state of the hole App.</p>
            <p className="bg-info mt-1 mb-1 p-2">useReducer: <strong>useReducer</strong> takes two params - reducer function (pure function, that manage state - "switch" construction) and object with initial state</p>
            <p className="bg-info mt-1 mb-1 p-2">useReducer: Returns two params - state itself and dispatch function, that make dispatching of the state.</p>
            <p className="bg-info mt-1 mb-1 p-2">useReducer: Dispatch function should be called with a parameter. <span>
              The parameter is an object like "{JSON.stringify({ "type": '...', "another-field": "value" })}". The object actually brings something new into the App state.
              </span>
            </p>
          </div>
        </div>

        <div className="mt-5">
          <h4>Application:</h4>
          <div className="ml-5">
            <p>The button is located <strong>out</strong> of Alert component:</p>
            <button onClick={show} className="btn btn-success">Show alert</button>
          </div>
        </div>
      </div>
    </>
  );
}
