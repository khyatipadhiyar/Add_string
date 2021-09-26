import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  const [sumstate, setSumstate] = useState(0);
  const [inputString, setInputString]= useState('');

  const addstring =(inputString)=>{
    console.log(inputString)
    // inputString state variable is assigned target value of input tag so it will always be string.
    // No need to check if inputString is string.
    if(inputString!==''){
      let newString = inputString.replace(/\\n/g,',')    
      let splitString = newString.split(',');
      if(splitString.includes("")){
        alert('Invalid Input')
      } else {
        let sum=0;
        splitString.forEach(element => {
          sum=sum+parseInt(element);
        });
        setSumstate(sum);
      }
    }
  }

  return (
    <div className="App">
      <h1>Technical Assessment</h1>
      <div>
        
        <input 
          data-testid='inputData'
          type="text" 
          placeholder="Enter a string" 
          onChange={(e)=>{setInputString(e.target.value)}}/>
        <button 
          data-testid='btn'
          onClick={()=>{addstring(inputString)}}>calculation</button>
        <br/>
        <br/>
        <label data-testid='labsum'>sum = {sumstate}</label>
      </div>
    </div>
  );
}

export default App;
