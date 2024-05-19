import { useState } from 'react'
// import './App.css'
import Tagline from './components/Tagline/Tagline'
import Home from './pages/Home'
// import Navbar from './components/Navbar/Navbar'
import Footer from './components/Footer/Footer'
import DownloadApp from "./components/DownloadApp/DownloadApp";
import { Route, Routes } from 'react-router-dom'
import Hospitals from './pages/Hospitals'

function App() {
  return (
    <>
      <Tagline />
      {/* <Navbar /> */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/hospitals/:state/:city" element={<Hospitals />} />
      </Routes>
      <DownloadApp />
      <Footer />
    </>
  )
}

export default App
