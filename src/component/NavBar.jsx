import React, { useEffect, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { auth } from '../config/firebase-config'; 
import '../App.css';
import pfpic from '../assets/pfpic.png'

const Navbar = () => {
    const [user, setUser] = useState(null);

    const Sections = [
        { path: "/WhereTo", name: "WhereTo" },
        { path: "/Add", name: "Add" },
        { path: "/RoutesComponent", name: "Routes" },
       
    ];

    useEffect(() => {
        // get the currently signed-in user
        const unsubscribe = auth.onAuthStateChanged((user) => {
            if (user) {
                // User is signed in
                setUser(user);
            } else {
                // No user is signed in
                setUser(null);
            }
        });

        return () => unsubscribe(); // Cleanup the observer on unmount
    }, []);

    return (
        <div className='navBar'>
            <div>
                <Link className='nav-elm' id='icone' to="/">KIA</Link>
            </div>
            <div className='nav-elm'>
                {Sections.map((section) => (
                    <NavLink
                        key={section.index}
                        to={section.path}
                        className={(navData) =>
                            navData.isActive
                                ? 'active-link'
                                : 'nav-elm'
                        }
                    >
                        {section.name}
                    </NavLink>
                ))}
      
                
                {user && (
                    <div className='pfp'>
                    <NavLink to="/Profile" className="nav-elm"> 
                    {user && user.photoURL ? (
                        <img src={user.photoURL} alt="Profile" className="profile-picture" />
                    ) : (
                        <img src={pfpic} alt="Profile" className="profile-picture" />
                    )}
                </NavLink>
                </div>
                
                )}
            </div>
        </div>
    );
};

export default Navbar;
