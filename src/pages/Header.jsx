import React from 'react'
import { useNavigate } from 'react-router-dom';
import white from '../assets/white.jpg'
import '../App.css'
function Header() {
  const navigate = useNavigate();

  const handleSubmit =  () => {

    navigate("/WhereTo");

  };
  return (
    <div>
      <div className="header">
        <div className="left">
          <div className='hh1'>
            <h1>Find your Route!</h1>
          </div>
          <div>
            <h3>
              Explore this route finding website
              find the best route for your destination efficiently!
              <span>

                <button className='home-btn' onClick={handleSubmit} >
                  Explore!
                </button></span>
            </h3>


          </div>
        </div>
        <div className="right">
          <img src={white} alt='' />
        </div>
      </div>
    </div>
  )
}

export default Header
