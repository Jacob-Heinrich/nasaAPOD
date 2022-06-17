import './App.css';
import React,{ useState } from 'react';
import { BrowserRouter, Route, Routes, useNavigate } from 'react-router-dom';
import Home from './components/home';
import NasaPhoto from './components/nasaphoto';

function App() {
  return (
    <>
    <div>
    <BrowserRouter>
    <Routes>
    <Route path="/" element={<Home/>} exact />
    <Route path="/nasaphoto" exact element={<NasaPhoto/>} />
    </Routes>
    </BrowserRouter>
    </div>
    </>
  );
}

export default App;
