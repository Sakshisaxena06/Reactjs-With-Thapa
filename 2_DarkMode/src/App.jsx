import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import React from 'react'
import { DarkLight } from './DarkMode'
import { ThemeProvider } from './DarkMode'
function App() {
  

  return  <>
 <section>
 <ThemeProvider>
  <DarkLight/>
 </ThemeProvider>
 </section>
  </>
}

export default App
