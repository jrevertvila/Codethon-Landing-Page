import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Home } from './components/Home.jsx'
import { AboutUs } from './components/AboutUs.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Home/>
      <AboutUs/>
    </>
  )
}

export default App
