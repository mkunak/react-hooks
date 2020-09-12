import React, { useEffect, useState } from 'react';

function App() {
  const [type, setType] = useState('users');
  const [data, setData] = useState([]);
  const [pos, setPos] = useState({ x: 0, y: 0 });


  // deps-array consist of instances that we follow on change:
  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/${type}`)
      .then((response) => response.json())
      .then((data) => setData(data));
  }, [type]);


  // empty deps-array emulate ComponentDidMount method:
  useEffect(() => {
    console.log('ComponentDidMount');
  }, []);


  // Listener for position:
  const handleMouseMove = (event) => {
    setPos({
      x: event.clientX,
      y: event.clientY,
    });
  };

  useEffect(() => {
    window.addEventListener('mousemove', handleMouseMove);

    // useEffect returns function, where we can make cleaning before ComponentWillUnmount:
    return () => {
      console.log('ComponentWillUnmount');
      window.removeEventListener('mousemove', handleMouseMove);
    }
  }, []);


  return (
    <>
      <div style={{ display: "flex" }}>
        <div>
          <h2>Source: {type}</h2>

          <button onClick={() => setType('users')}>Users</button>
          <button onClick={() => setType('todos')}>Todos</button>
          <button onClick={() => setType('posts')}>Posts</button>

          <div>
            <pre>{JSON.stringify(data, null, 2)}</pre>
          </div>
        </div>
        <div>
          <h2>Cursor position:</h2>
          <pre>{JSON.stringify(pos, null, 2)}</pre>
        </div>
      </div>
    </>
  );
}

export default App;
