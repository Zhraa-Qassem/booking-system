import React from 'react';

const Button = ({ label, onClick, className }) => {
  return (
    <div className='btn-container'>
    <button className={className} onClick={onClick} type='submit'>
      {label}
    </button>
    </div>
  );
};


export default Button;

