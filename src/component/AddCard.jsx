import React from 'react'
import Button from '../component/Button'
import green from '../assets/green.jpg'
function AddCard() {
  return (
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
        
        <button className='add-btn'>Add Stop</button>
        
      </form>
      <Button label="Submit"  className="btn" />
    </div>
     <div className='image-container'>

     <img src={green} alt='add ' className='centered-image' />
    </div>
    </div>
  )
}

export default AddCard
