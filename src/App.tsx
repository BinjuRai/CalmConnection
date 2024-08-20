import React from 'react';
import Home from './components/Home'; // Import the Home component
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LoginPage from './components/LoginPage';
import RegistrationPage from './components/RegistrationPage';
import FAQ from './components/Faq';
import BasicInfo from './components/BasicInfo';
import Enquiry from './components/Enquiry';
import Navbar from './components/Navbar';
import Booking from './components/Booking';
function App() {
  return (
    <BrowserRouter>   
    <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/basic info" element={<BasicInfo />} />
        <Route path="/faq" element={<FAQ />} />
        <Route path="/enquiry" element={<Enquiry />} />
        <Route path="/booking" element={<Booking />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegistrationPage />} />
        <Route path="/booking" element={<Booking/>} />
      </Routes>
    </BrowserRouter>
  );
}

 
export default App;
