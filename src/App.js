import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
function App() {
const [age, setage] = useState(0)
const [heartlimitU, setheartlimitU] = useState(0)
const [heartlimitL, setheartlimitL] = useState(0)
const calculate = () =>{
  {
  const Upper = (220-age)* 0.85
  setheartlimitU(Upper) 
}
{
const Lower =(220 - age)* 0.65
setheartlimitL(Lower)
}
}

  return (
    <div id ="content">
      <h3>Heartlimit Calculator</h3>
      <form>
        <div>
          <label>Age</label> 
          <input type ="number" placeholder = "Enter your age" value ={age}
           onChange  = { e => setage(e.target.value)
           }
           />
        </div>
        <div>
          <label>heartlimit</label>  
          <output id="output" > {heartlimitL}-{heartlimitU}</output>
        </div>
        <button type = "button" onClick = {calculate}> Calculate</button>
      </form>
    </div>
  );
}
export default App;