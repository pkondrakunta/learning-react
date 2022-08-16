import logo from './logo.svg';
import './App.css';

import { useState, useEffect, useReducer } from 'react';

const cities = ["Tokyo", "New York City", "Hyderabad"]

function App(props) {

  const [emotion, setEmotion] = useState("happy");
  const [secondaryEmotion, setSecondary] = useState("tired")
// Logs the emotion every time it changes

  useEffect(() => {
    console.log(`It's ${emotion} right now`)
  },[emotion])

  useEffect(() => {
    console.log(`Emotion change to: ${emotion}, ${secondaryEmotion}`)
  },[emotion, secondaryEmotion])

  const  [checked, setChecked] = useReducer((checked) => !checked);

  return (
    <div className="App">
      <h1>Hello from {props.library}
      </h1>

      <h2>Current emotion is {emotion}
      </h2>
      <br/>

      <button onClick={() => setEmotion("sad")}>Make me sad</button>
      <button onClick={() => setEmotion("excited")}>Make me Excited</button>

      <br/>

      <h2>Secondary emotion is {secondaryEmotion}
      </h2>

      <button onClick={() => setSecondary("tired")}>I am tired</button>
      <button onClick={() => setSecondary("energetic")}>I am energetic</button>

      <br/>

      <h2>Using Reducer for Checked/Unchecked</h2>

      <input type="checkbox"
      value={checked}
      onChange={setChecked} />

      <label>
        {checked ? "checked" : "unchecked"}
      </label>

    </div>
  );
}

export default App;
