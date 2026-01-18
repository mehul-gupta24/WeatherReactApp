import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import WeatherApp from './WeatherApp';

function App() {
  // let handleClick=()=>{
  //   console.log("button was clicked")
  // }
  
  return (
    <>
      {/* <Button variant="text">Text</Button> */}
      {/* <Button onClick={handleClick} variant="contained">Click Me1</Button>
      <Button onClick={handleClick} variant="contained" disabled>Click Me2</Button>
      <Button onClick={handleClick} variant="contained" color='error'>Click Me2</Button> */}
      <WeatherApp/>
    </>

  )
}

export default App
