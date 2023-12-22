import React, { useState } from 'react';
import uuid from 'react-uuid';

function App() {

  const initNotes = [
    {
      id: id(),
      prop1: 'value11',
      prop2: 'value12',
      prop3: 'value13',
    },
    {
      id: id(),
      prop1: 'value21',
      prop2: 'value22',
      prop3: 'value23',
    },
    {
      id: id(),
      prop1: 'value31',
      prop2: 'value32',
      prop3: 'value33',
    },
  ];

  const inputsValue = [
    {
      id: id(),
      value: ""
    },
    {
      id: id(),
      value: ""
    },
    {
      id: id(),
      value: ""
    },
  ]

  const [notes, setNotes] = useState(initNotes);
  const [value, setValue] = useState(inputsValue);

  const result = notes.map((elem, index) => {
    return <>
      <li key={elem.id}>
        <span> {elem.prop1} </span>
        <span> {elem.prop2} </span>
        <span> {elem.prop3} </span>
      </li>
      <button onClick={() => addValueToInput(elem)}>add value to input</button>
      <button onClick={() => deleteThis(elem.id)}>delete</button>
    </>
  });
  const inputs = value.map((inputObj, index) => {
    return <>
      <input type='text' key={inputObj.id} onChange={(event) => updateValue(event, inputObj.id)} value={inputObj.value}/>
      <button key={inputObj.id} onClick={setValueToInput(inputObj.id, index)}>change</button>
    </>
  });

  function updateValue(event, id) {
    let copy = Object.assign([], value);
    for(let obj of copy) {
      if(obj.id == id) {
        obj.value = event.target.value;
      }
    }
    setValue(copy);
  }

  function setValueToInput(inputID, inputIndex) {
    let text = "";
    inputs.forEach(elem => {
      if(inputID == elem.id) {
        text = elem.value;
      }
    })

    // TODO
  }

  function deleteThis(id) {
    let copy = Object.assign([], notes);
    setNotes(copy.filter(elem => {
      if(elem.id !== id) {
        return elem;
      }
    }))
  }

  function addValueToInput(elem) {
    let input1 = elem.prop1,
        input2 = elem.prop2,
        input3 = elem.prop3;

    let copy = Object.assign([], value);
    copy = copy.map((obj, index) => {
      if(index == 0) {
        obj.value = input1;
      }
      if(index == 1) {
        obj.value = input2;
      }
      if(index == 2) {
        obj.value = input3;
      }
      return obj;
    })
    setValue(copy)
  }

  function addNewElement() {
    let copy = Object.assign([], notes);
    let inputValue1 = "";
    let inputValue2 = "";
    let inputValue3 = "";
    value.forEach((obj, index) => {
      if(index == 0) {
        inputValue1 = obj.value;
      }
      if(index == 1) {
        inputValue2 = obj.value;
      }
      if(index == 2) {
        inputValue3 = obj.value;
      }
    })
    copy.push({
      id: id(),
      prop1: inputValue1,
      prop2: inputValue2,
      prop3: inputValue3,
    })
    setNotes(copy);
  }



  return <div>
    <ul>
      {inputs}
      {/* <button onClick={() => addNewElement()}>add new li</button> */}
      { result  }    
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
