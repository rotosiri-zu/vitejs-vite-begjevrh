import { useState } from 'react'
import { practice1 } from "./practices/practice1";
import { practice2 } from "./practices/practice2";
import { practice3 } from "./practices/practice3";
import { practice4 } from "./practices/practice4";
import './App.css'


function App() {
  const [count, setCount] = useState(0)

  return (
  <div className="App">
      <practice1 />
      <practice2 />
      <practice3 />
      <practice4 />
  </div>
  )
}

export default App
