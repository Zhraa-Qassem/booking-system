import React from 'react'
import green from '../assets/green.jpg'
import '../App.css'
function Add() {
  return (
    <div className='add'>
    <div className='add-card'>
    <div className='add-form'>
    <div className='add-header'>
      <h1> <span style={{color: 'black'}}> thank you  </span>for cooperating !
      </h1>
      <div className='add-p'>
      <p>hello user !
      </p>
      <p>please Enter your location and destination below.</p>
      </div>
      </div>
      <form>
        <div className='add-input'>
          <input placeholder='Starting Point '>
          </input>
          <hr></hr>
        </div>
        <div className='add-input'>
          <input placeholder='Destination'></input>
          <hr></hr>
        </div>
        <div className='add-input' >
          <input placeholder='Stop 1'>
          </input>
          <hr style={{width:'274px'}}></hr>
        </div>
        <div className='add-input' >
          <input placeholder='Stop 2'>
          </input>
          <hr style={{width:'274px'}}></hr>
        </div>
        <button>Add Stop</button>
      </form>
    </div>
     <div className='image-container'>

     <img src={green} alt='find way ' className='centered-image' />
    </div>
    </div>
    </div>
  )
}

export default Add
