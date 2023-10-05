import React from 'react';
import Navbar from '../component/NavBar';
import Footer from '../component/Footer';
import Header from './Header';
import About from './About'
import '../App.css'
function Home() {
  return (
    <div className='home'>
    <Navbar/>
    <Header/>
    <About/>
    <Footer/>
    </div>
  );
}

export default Home;
