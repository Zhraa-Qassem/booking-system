import React from 'react'
import AddCard from '../component/AddCard'
import Navbar from '../component/NavBar'
import Footer from '../component/Footer'
import '../responsive.css'
import '../App.css'
function Add() {
  return (
    <div className='add'>
    <Navbar />
    <AddCard />
    <Footer />
    </div>
  )
}

export default Add
