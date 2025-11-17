import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { ReducerComp } from './UseReducer'
import { ReactMemo } from './useMemo/ReactMemo'
import MemoParentComponent from './useMemo/useMemo'
import UseCallBack from './useMemo/UseCallback'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
   {/* <ReducerComp/>.  */}
   {/* <ReactMemo/> */}
   {/* <MemoParentComponent/> */}
   <UseCallBack/>
    </>
  )
}

export default App
