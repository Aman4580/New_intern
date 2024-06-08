import React, { useEffect, useState } from 'react';
import { MdOutlineDarkMode } from "react-icons/md";
import { MdDarkMode } from "react-icons/md";
import {Link} from 'react-router-dom';


function Navbar({ openSignup, openSignin }) {
    const [darkMode, setDarkMode] = useState(false);

    const toggleDarkMode = () => {
        setDarkMode(!darkMode);
    }

    useEffect(() => {
        if (darkMode) {
            document.body.classList.add('dark');
        } else {
            document.body.classList.remove('dark');
        }
    }, [darkMode]);

    return (
        <nav className={darkMode ? 'navbar dark' : 'navbar'}>
            <div className="navbar-logo">MyApp</div>
            <div className="navbar-buttons">
                <button onClick={toggleDarkMode}>
                    {darkMode ? <MdDarkMode /> : <MdOutlineDarkMode />}
                </button>
                <Link to='/signup'>
                <button className="signup-button" onClick={openSignup}>Sign Up</button>   
                </Link>
                <Link to='/signin'>
                <button className="signin-button" onClick={openSignin}>Sign In</button>
                </Link>
                
            </div>
        </nav>
    );
}

export default Navbar;
