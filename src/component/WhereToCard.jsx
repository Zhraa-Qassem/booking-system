import React from 'react'
import '../App.css'
import find from '../assets/find-way.jpeg'
function WhereToCard() {
  return (

    <div className='where-card'>
      <div className='where-form'>
      <div className='where-header'>
        <h1> <span style={{color: 'black'}}> Find your</span> route
        </h1>
        <div className='where-p'>
        <p>hello user !
        </p>
        <p>please Enter your location and destination below.</p>
        </div>
        </div>
        <form>
          <div className='where-input'>
            <input placeholder='where are you ?'>
            </input>
            <hr></hr>
          </div>
          <div className='where-input'>
            <input placeholder='where are you going ?'></input>
            <hr></hr>
          </div>
        </form>
      </div>
       <div className='image-container'>

       <img src={find} alt='find way ' className='centered-image' />
      </div>
      

    
    </div>
  )
}

export default WhereToCard
