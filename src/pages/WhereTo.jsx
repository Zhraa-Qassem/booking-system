import React from 'react'
import '../App.css'
import '../responsive.css'
import WhereToCard from '../component/WhereToCard';
import Navbar from '../component/NavBar';
import Footer from '../component/Footer';

function WhereTo() {
  return (
    <div className='where-to'>
      <Navbar />
      <WhereToCard />

      <Footer />
    </div>
  )
}

export default WhereTo
