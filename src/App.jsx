import { useState } from 'react'
import './App.css'
import { Navbar } from './Components/Navbar'
import { Herobar } from './Components/Herobar'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Navbar/>
    <Herobar/>
    </>
  )
}

export default App
