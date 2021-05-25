import React from 'react';
import './App.css';

import {useFetch} from "./hooks/useFetch";


function App() {


  const {data, loading, error} = useFetch('https://jsonplaceholder.typicode.com/users/', [])


  return (
    <div className="App">

      <ul>
        {loading || data.map((user) => <li key={user.id}> {user.name} </li>)}
      </ul>
      
    </div>
  );
}

export default App;
