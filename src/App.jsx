import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import CardCom from './components/CardCom'

function App() {
  const [count, setCount] = useState(0);
  let myobj = {
    name: 'palak',
    age: 20
  }
  let newArr = [1,2,3]
  return (
    <>
    <h1 className = 'bg-green-400 text-black rounded-xl mb-4'>Tailwind Testing </h1>
    <CardCom username = 'justsomething' btnText = 'click me'/>
    <CardCom username = "audrey" btnText = 'cisit me'/>
    </>
  )
}

export default App
