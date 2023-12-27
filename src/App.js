import React, { useState } from 'react';
import uuid from 'react-uuid';
import Product from './Product';

function App() {
  const prods = [
    {id: id(), name: 'product1', cost: 100},
    {id: id(), name: 'product2', cost: 200},
    {id: id(), name: 'product3', cost: 300},
  ];

  const result = prods.map(obj => {
    return <Product key={obj.id} name={obj.name} cost={obj.cost}/>
  })

  return <div>
    {result}
  </div>
}

function id() {
  return uuid();
}

export default App;
