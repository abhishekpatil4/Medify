import { useState } from 'react'
// import './App.css'
import Tagline from './components/Tagline/Tagline'
import Home from './pages/Home'
// import Navbar from './components/Navbar/Navbar'
import Footer from './components/Footer/Footer'
import DownloadApp from "./components/DownloadApp/DownloadApp";
import { Route, Routes } from 'react-router-dom'
import Hospitals from './pages/Hospitals'
import FAQ from './components/FAQ/FAQ';

function App() {
  return (
    <>
      <Tagline />
      {/* <Navbar /> */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/hospitals/:state/:city" element={<Hospitals />} />
      </Routes>
      <FAQ />
      <DownloadApp />
      <Footer />
    </>
  )
}

export default App
