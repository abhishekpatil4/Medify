import { useState } from 'react'
// import './App.css'
import Tagline from './components/Tagline/Tagline'
import Home from './pages/Home'
import Navbar from './components/Navbar/Navbar'
import Footer from './components/Footer/Footer'
import DownloadApp from "./components/DownloadApp/DownloadApp";

function App() {
  return (
    <>
      <Tagline />
      <Navbar />
      <Home />
      <DownloadApp />
      <Footer />
    </>
  )
}

export default App
