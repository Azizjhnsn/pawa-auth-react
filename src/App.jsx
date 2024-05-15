import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import '@fortawesome/fontawesome-free/css/all.min.css';
import './assets/extr.css';
import OTP from './pages/auth/OTP';
import LogIn from './pages/auth/LogIn';
import Signup from './pages/auth/Sign-up';


function App() {


  return (
    <>
      <BrowserRouter>
      <Routes>
        {/* Auth Components */}
        <Route path="/otp" element={<OTP />} />
        <Route path="/login" element={<LogIn />} />
        <Route path="/signup" element={<Signup />} />
        {/* Pages routes */}
        
      </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
