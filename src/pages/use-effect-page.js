import React, { useEffect, useState } from 'react';

function UseEffectPage() {
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
      <div className="text-center mt-2 mb-5">
        <h3>useEffect</h3>
      </div>
      <div>
        <div>
          <h4>Why?</h4>
          <div></div>
        </div>
        <div>
          <h4>Application:</h4>
          <div className="d-flex">
            <div className="w-75">
              <h5>Source: {type}</h5>

              <button className="mr-2" onClick={() => setType('users')}>Users</button>
              <button className="mr-2" onClick={() => setType('todos')}>Todos</button>
              <button className="mr-2" onClick={() => setType('posts')}>Posts</button>

              <div>
                <pre>{JSON.stringify(data, null, 2)}</pre>
              </div>
            </div>
            <div>
              <h5>Cursor position:</h5>
              <pre>{JSON.stringify(pos, null, 2)}</pre>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default UseEffectPage;
