import React from 'react';
import { Link } from 'react-router-dom';
import bannerImg from '../images/restaurantfood.jpg';

const Header = () => {
  return (
    <header className='header'>
      <section className='header-content'>
        <div className='banner'>
          <h2>Little Lemon</h2>
          <h3>Toronto</h3>
          <p>We are a family-owned Mediterranean restaurant, focused on traditional recipes served with a modern twist. We are open 24/7, 365 days a year.</p>
          <Link to="/booking">
            <button aria-label='Reserve Table'>Reserve Table</button>
          </Link>
        </div>

        <div className='banner-img'>
          <img src={bannerImg} alt='Restaurant Interior' />
        </div>
      </section>
    </header>
  );
};

export default Header;
