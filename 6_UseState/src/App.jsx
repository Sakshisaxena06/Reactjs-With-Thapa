import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Counter } from './components/useState'
import React from 'react'
import CounterChallenge from './components/useState/Challenge'
// import "./Hooks.css"

function App() {
  const [count, setCount] = useState(0)

  return <section>
    {/* <Counter/> */}
    <CounterChallenge/>
  </section>
}

export default App
