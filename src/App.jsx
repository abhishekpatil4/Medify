import { useState } from 'react'
// import './App.css'
import Tagline from './components/Tagline/Tagline'
import Home from './pages/Home'
import Navbar from './components/Navbar/Navbar'
function App() {
  return (
    <>
      <Tagline />
      <Navbar />
      <Home />
    </>
  )
}

export default App
