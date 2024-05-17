import { useState } from 'react'
// import './App.css'
import Tagline from './components/Tagline/Tagline'
import Home from './pages/Home'
import Navbar from './components/Navbar/Navbar'
import Footer from './components/Footer/Footer'
function App() {
  return (
    <>
      <Tagline />
      <Navbar />
      <Home />
      <Footer />
    </>
  )
}

export default App
