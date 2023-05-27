import React, {useState} from 'react';
import './App.scss';
import {getManufacturers} from "./services/httpCalls";

function App() {

  let [useMans, setMans] = useState([] as any[])
    async function getData() {
      setMans(await getManufacturers())
    }
  return (
    <div className="App">
      <button onClick={getData}>get data</button>
      {useMans.map((m) => <p>{m?.man_name}</p>)}
    </div>
  );
}

export default App;
