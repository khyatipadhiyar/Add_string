import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  const [sumstate, setSumstate] = useState(0);
  const [inputString, setInputString]= useState('');

  const addstring =(inputString)=>{
    console.log(inputString)
  }

  return (
    <div className="App">
      <h1>Technical Assessment</h1>
      <div>
        
        <input type="text" placeholder="Enter a string" onChange={(e)=>{setInputString(e.target.value)}}/>
        <button onClick={()=>{addstring(inputString)}}>calculation</button>
        <br/>
        <br/>
        <label>sum = {sumstate}</label>
      </div>
    </div>
  );
}

export default App;
