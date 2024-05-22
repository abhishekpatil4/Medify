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
import Bookings from './pages/Bookings';

function App() {
  return (
    <>
      <Tagline />
      {/* <Navbar /> */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/hospitals/:state/:city" element={<Hospitals />} />
        <Route path="/bookings" element={<Bookings />} />
      </Routes>
      <DownloadApp />
      <Footer />
    </>
  )
}

export default App
