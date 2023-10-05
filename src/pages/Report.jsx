import React from 'react'
import Navbar from '../component/NavBar'
import Footer from '../component/Footer'
import Button from '../component/Button'
import '../App.css'
function Report() {
  return (
    <div className='report'>
    <Navbar/>
     <h1>
     Report <span style={{color:'white'}}> the issue</span>
     </h1>
     <div>
     <input className='report-input' placeholder='Route ID'></input>
     </div>
     <input className='message' placeholder='write the issue.....'></input>
     <Button label={'Change'} className={'wt-btn'}/>
     <Footer/>
    </div>
  )
}

export default Report
