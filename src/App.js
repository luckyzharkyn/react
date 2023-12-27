import React, { useState } from 'react';
import uuid from 'react-uuid';

function App() {

  const initNotes = [
    {
      id: id(),
      name: 'name1',
      desc: 'long description 1',
      show: false,
    },
    {
      id: id(),
      name: 'name2',
      desc: 'long description 2',
      show: false,
    },
    {
      id: id(),
      name: 'name3',
      desc: 'long description 3',
      show: false,
    },
  ];

  const [notes, setNotes] = useState(initNotes);

  const result = notes.map(note => {
		return <>
    <p key={note.id}>
			{note.name}, 
			{note.show && <i>{note.desc}</i>}
		</p>
    <button key={note.id} onClick={() => showElement(note.id)}>{note.show ? "hide" : "show"}</button>
    </>
	});

  function showElement(id) {
    let copy = Object.assign([], notes);
    copy = copy.map(elem => {
      if(elem.id === id) {
        elem.show = !elem.show;
      }
      return elem;
    });
    setNotes(copy);
  }

  return <div>
    {result}
  </div>
}

function plus(number1, number2) {
  return Number(number1) + Number(number2);
}

function id() {
  return uuid();
}

export default App;
