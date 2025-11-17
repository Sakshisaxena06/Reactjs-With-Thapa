import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import React from 'react'
import { HowNotToFetchApi } from './components/useEffect/HowNotTOFetchApi'

function App() {
  const [count, setCount] = useState(0)

  return (
   <section>
    <HowNotToFetchApi/>
   </section>
  )
}

export default App
