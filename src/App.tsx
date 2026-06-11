import { useState } from 'react'
import { practice1 } from "./practices/practice1";
import { practice2 } from "./practices/practice2";
import './App.css'


function App() {
  const [count, setCount] = useState(0)

  return (
  <div className="App">
      <practice1 />
      <practice2 />
  </div>
  )
}

export default App
