
import React, { useEffect, useState } from 'react'
import { getPost } from './api/PostApi'
import Posts from './components/Posts';
const App = () => {

  console.log(getPost());
  

  return (
 <section className='main-section'>
   <Posts/>
 </section>

    
 
  )
}

export default App