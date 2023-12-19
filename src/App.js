import React, { useState } from 'react';
import uuid from 'react-uuid';

function App() {
  function id() {
    return uuid();
  }



  const initObj = {
    prop1: 'value1',
    prop2: 'value2',
    prop3: 'value3',
  }
  const [obj, setObj] = useState(initObj);

  function changeHandler(key, event) {
    let copy = Object.assign({}, obj);
    copy[key] = event.target.value;
    setObj(copy);
  }

  let inputs = [];
  for(let key in obj) {
    inputs.push(
        <input key={key} value={obj[key]} onChange={(event) => changeHandler(key, event)}/>
    )
  }
  return <div>
    {inputs}
    <p>
      {obj.prop1}
    </p>
    <p>
      {obj.prop2}
    </p>
    <p>
      {obj.prop3}
    </p>
  </div>
}

function plus(number1, number2) {
  return Number(number1) + Number(number2);
}

export default App;
