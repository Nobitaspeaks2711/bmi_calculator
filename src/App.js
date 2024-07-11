import React, { useMemo, useState } from 'react'
import './App.css'

const App = () => {
  const [height, setHeight] = useState(160);
  const [weight, setWeight] = useState(70);


  function onWeightChange(event) {
    setWeight(event.target.value)

  }
  function onHeightChange(event) {
    setHeight(event.target.value)

  }
  const output = useMemo(() => {
    const calculateHeight = height / 100;

    return (weight / (calculateHeight * calculateHeight)).toFixed(1)

  }, [weight, height]);



  return (
    <main>
      <h1>BMI Calculator
        <h2 className='sub'>Body Mass Index</h2>
      </h1>
      <div className='input-section'>
        <p className='slider-output'>Weight : {weight} kg  </p>
        <input className='input-slider'
          type='range'
          step="1"
          min="40"
          max="150"
          onChange={onWeightChange} />

        <p className='slider-output'>Height :
          {height}cm </p>
        <input className='input-slider'
          type="range"
          onChange={onHeightChange}
          min="100"
          max="200" />
      </div>
      <div className='output-section'>
        <p>Your BMI is</p>

        <p className='output'>{output}</p>
      </div>
      <footer className='footer'>*Healthy BMI range:18.5 kg/m2 - 25kg/m2</footer>
    </main>
  );
};

export default App