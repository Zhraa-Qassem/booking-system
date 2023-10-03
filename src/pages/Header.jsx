import React from 'react'
import white from '../assets/white.jpg'
import '../App.css'
function Header() {
  return (
    <div>
    <div className="header">
    <div className="left">
      <div className='hh1'>
        <h1>Find your Route!</h1>
      </div>
      <div>
      <div className='hh3'>
        <h3>
          Explore this route finding website
          find the best route for your destination efficiently!
        </h3></div>
        <button>
          Explore!
        </button>
      </div>
    </div>
    <div className="right">
      <img src= {white} alt='' />
    </div>
  </div>
    </div>
  )
}

export default Header
