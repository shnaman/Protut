import { useState } from 'react'
import Navbar from './components/Navbar'
import './App.css'
import Dashboard from './components/Dashboard'
import HeroSection1 from './components/HeroSection1'
import HeroSection2 from './components/HeroSection2.jsx'
import Footer from './components/Footer.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div className=''>
        <Navbar/>
        <Dashboard/>
        <HeroSection1/>
        <HeroSection2/>
      <Footer/>
    </div>
    
    </>
  )
}

export default App
