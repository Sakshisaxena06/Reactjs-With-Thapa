import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import React from 'react'
import { Todo } from './components/Todo'

export const App=() => {

  return (
    <section>
      <Todo/>
    </section>
  )
}

export default App
