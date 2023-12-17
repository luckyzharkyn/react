import React, { useState } from 'react';
import uuid from 'react-uuid';

function App() {
  function id() {
    return uuid();
  }

  const [count, setCount] = useState(0);

  return <div>
    <span>{count}</span>
    <button onClick={() => setCount(count + 1)}>+</button>
  </div>
}

export default App;



// Я пошел в магазин рядом с домом 17.12.2023
// 18:33 вышел из дома
// написал на всякий случай
