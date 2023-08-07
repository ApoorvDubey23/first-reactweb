import React from 'react'
import "./contentfile.css";
import VDBGCF from "./videos/vdocontentfilebg.mp4"
import { Link, Route, Routes } from 'react-router-dom';
import Navbar from './navbar';
function Contentfile() {
  return (
  <>
  <div>
  </div><div>

  
  <video src={VDBGCF} autoPlay muted loop/>
    <div className='main' >
      <Link to="/">  <div className='gb'>⬅Go back </div></Link> 
    
      <div className='mainsub'>
       
        <div className='subsub'>
        DESTINATIONS
        </div>
        <div className='subdesc'>
        Explore a world of wonders with our curated destinations. From exotic paradises to historical marvels, let your wanderlust roam free. Unforgettable experiences await you at every turn.
        </div>
      </div>
      <div className='mainsub'>
    
        <div className='subsub'>
        TRIPS
        </div>
        <div className='subdesc'>
        finbidfnbn ffjvnodfj nbi   jdfnbjnijbd fijbadfibihjfd  bvj dsnvojn dfijvijn  dfjn
        </div>
      </div>
      <div className='mainsub'>
     
        <div className='subsub'>
        EXPERIENCES
        </div>
        <div className='subdesc'>
        finbidfnbn ffjvnodfj nbi   jdfnbjnijbd fijbadfibihjfd  bvj dsnvojn dfijvijn  dfjn
        </div>
      </div>
      <div className='mainsub'>
      
        <div className='subsub'>
        Why Travelling?
        </div>
        <div className='subdesc'>
        finbidfnbn ffjvnodfj nbi   jdfnbjnijbd fijbadfibihjfd  bvj dsnvojn dfijvijn  dfjnn
        </div>
      </div>
    </div>
    </div>
    </>
  )
}

export default Contentfile
