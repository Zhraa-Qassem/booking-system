import React from 'react';
import { Link } from 'react-router-dom';
import bannerImg from '../images/restaurantfood.jpg'

const Header = () => {
    return (
        <header className='header'>
            <section>
                <div className='banner'>
                    <h2>Little Lemon</h2>
                    <h3>Toronto</h3>
                    <p>We are a family owned Maditerraneran restaurant, focused on traditional recipes servered
                        with a modern twist. we are open 24/7hours 365days. </p>
                    <Link to="/booking"><button aria-label='On Click'>Reserve Table</button></Link>
                </div>

                <div className='banner-img'>
                    <img src={bannerImg} alt='' />
                </div>
            </section>
        </header>
    )
}

export default Header;
