import React, { useEffect, useState } from 'react';

const ItemList = ({ getItems }) => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const items = getItems();
    setItems(items);
    console.log('render ItemList');
  }, [getItems]);

  return (
    <ul>
      {items.map((item, idx) => <li key={idx}>{item}</li>)}
    </ul>
  );
};

export default ItemList;