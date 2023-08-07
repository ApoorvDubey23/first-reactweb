import React from 'react';
import { Link, Route, Routes } from 'react-router-dom'; // Import Link, Route, and Routes
import './maincontent.css';
import Navbar from './navbar';

import VDBG from './videos/video-1.mp4';


function Maincontent() {
  return (
    <>
      <Navbar />
      <div className='mncntnt'>
        <video src={VDBG} autoPlay loop muted />
        <div className='rtmncntnt'>
          "Join us on a thrilling journey through the wonders of travel!"
        </div>

        <Link to='/start'>
          <button>
            <span>Get Started</span>
          </button>
        </Link>

      </div>

    
    </>
  );
}

export default Maincontent;
