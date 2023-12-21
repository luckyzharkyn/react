import React, { useState } from 'react';
import uuid from 'react-uuid';

function App() {
  const[notes, setNotes] = useState([1, 2, 3, 4, 5]);
  const[value, setValue] = useState();
  const[index, setIndex] = useState(null);
  

  const result = notes.map((elem, index) => {
    return <>
      <li key={index} onClick={() => doSmth(index)}>{elem}</li>
    </>
  })

  function doSmth(index) {
    setIndex(index);
    setValue(notes[index]);
  }

  function changeInput(event) {
    // let copy = [...notes.slice(0, index), event.target.value, ...notes.slice(index + 1)];
    let copy = Object.assign([], notes);
    copy[index] = event.target.value;
    setNotes(copy);
  }
  function reverse() {
    let copy = Object.assign([], notes);
    setNotes(copy.reverse());
  }

  return <div>
    <button onClick={() => reverse() }>reverse</button>
    <input value={value} onBlur={(event) => changeInput(event)} onChange={(event) => setValue(event.target.value)}/>
    <ul>
    {result}
    </ul>
  </div>
}

function plus(number1, number2) {
  return Number(number1) + Number(number2);
}

function id() {
  return uuid();
}

export default App;
