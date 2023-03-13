import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './screens/mobile/Home';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        
        {/* <Route path="/home" element={<}/> */}
        <Route path='/' element={<Home/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
