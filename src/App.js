/*import React, { useState } from "react";
import "./App.css";
import * as tf from "@tensorflow/tfjs";

function App() {
  let [inputText, setInputText] = useState("");
  let [resultText, setResultText] = useState("");

  const handleInputChange = (event) => {
    setInputText(event.target.value);
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    model = await tf.loadModel('model/model.json')
    let prediction = model.predict([String(inputText)])
    const myArray = ['AddToPlaylist', 'BookRestaurant', 'GetWeather', 'PlayMusic', 'RateBook', 'SearchCreativeWork', 'SearchScreeningEvent'];
    let i = prediction.indexOf(Math.max(...prediction));
    // Here you would call your intent classification function
    // and set the result text in state based on the returned result
    let result = myArray[i]
    setResultText(result);
  };

  return (
    <div className="App">
      <header>
        <h1>Intent Classification</h1>
      </header>
      <main>
        <section>
          <h2>Project Description</h2>
          <p>
            This project is focused on developing an intent classification
            model.
          </p>
        </section>
        <section>
          <h2>Try It</h2>
          <form onSubmit={handleFormSubmit}>
            <label htmlFor="input">Input:</label>
            <input
              type="text"
              id="input"
              value={inputText}
              onChange={handleInputChange}
            />
            <button type="submit">Classify Intent</button>
          </form>
          <div className="result">
            <label htmlFor="result">Result:</label>
            <span id="result">{resultText}</span>
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;
*/

import React, { useState } from "react";
import "./App.css";
import * as tf from "@tensorflow/tfjs";

function App() {
  let [inputText, setInputText] = useState("");
  let [resultText, setResultText] = useState("");

  const handleInputChange = (event) => {
    setInputText(event.target.value);
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    const model = await tf.loadModel('model/model.json');
    let prediction = model.predict([String(inputText)])
    const myArray = ['AddToPlaylist', 'BookRestaurant', 'GetWeather', 'PlayMusic', 'RateBook', 'SearchCreativeWork', 'SearchScreeningEvent'];
    let i = prediction.indexOf(Math.max(...prediction));
    let result = myArray[i]
    setResultText(result);
  };

  return (
    <div className="App">
      <header>
        <h1>Intent Classification</h1>
      </header>
      <main>
        <section>
          <h2>Project Description</h2>
          <p>
            This project is focused on developing an intent classification
            model.
          </p>
        </section>
        <section>
          <h2>Try It</h2>
          <form onSubmit={handleFormSubmit}>
            <label htmlFor="input">Input:</label>
            <input
              type="text"
              id="input"
              value={inputText}
              onChange={handleInputChange}
            />
            <button type="submit">Classify Intent</button>
          </form>
          <div className="result">
            <label htmlFor="result">Result:</label>
            <span id="result">{resultText}</span>
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;
