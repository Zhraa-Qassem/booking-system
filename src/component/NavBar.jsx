import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css'



const Navbar = () => {
    return (
        <div className='navBar'>


                <div>
                    <Link className='nav-elm ' id='icone' to="/" >Home</Link>
               
                    </div>
                    <div>
                    <Link className='nav-elm' to="/WhereTo">WhereTo</Link>
                    <Link className='nav-elm' to="/Add">Add</Link>
                    <Link className='nav-elm' to="/Report">Report</Link>
                    <Link className='nav-elm' to="/Profile">Profile</Link>
                    </div>
         


        </div>


    )

}

export default Navbar;