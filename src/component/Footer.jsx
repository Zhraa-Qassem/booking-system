import React from 'react'
import phone from '../assets/phone.jpg'
import email from '../assets/email.jpg'
import '../App.css'
function Footer() {
    return (
        <div className='footer'>
        <div className='foot' >
            <h4>KIA</h4>
            <div className='copy-right'>
                &copy; {new Date().getFullYear()} Zahraa Qassem
            </div>
            <div className='contacts'>
                <div className='contact-me'>
                    Contact me :
                </div>
                <div className='mini-contact'>
                    <img src={phone} alt='phone'></img>
                    <div>
                        <h5>phone
                        </h5>
                        <h6>
                        <a
                         href="tel:07708060852">07708060852
                        </a>
                        </h6>
                    </div>
                </div>
                <div className='mini-contact'>
                <img src={email} alt='email'></img>
                <div>
                    <h5>E-MAIL
                    </h5>
                    <h6>
                    <a href="mailto:zhraaqassem20@gmail.com?subject=get in touch">zhraaqassem20@gmail.com</a>
                  </h6>
                </div>
            </div>
            </div>
            </div>
        </div>
    )
}

export default Footer
