import React from 'react';
import Contentfile from './contentfile'; 
import Maincontent from './maincontent';
import { Link, Route, Routes } from 'react-router-dom'; 

function App() {
  return (
    <>
   
        <Routes>
        <Route path='/start' element={<Contentfile />} /> 
        <Route path='/' element={<Maincontent />} /> 
        <Route path='/destinations' element={<Maincontent />} /> 

      </Routes>
    </>
  )
}

export default App
