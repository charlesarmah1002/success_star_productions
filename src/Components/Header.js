import React, { useEffect, useState } from 'react';

import Logo from '../images/image.png';
import './Header.css';

const Header = () => {
    const [scrolled, setScrolled] = useState('');
    const [isActive, setIsActive] = useState('');

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY < 100) {
                setScrolled('');
            } else {
                setScrolled('scrolled');
            }
        };

        window.addEventListener('scroll', handleScroll);
        
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);
    
    const activateMenu = () => {
        setIsActive(isActive ? '' : 'active');
    };

    return (
        <header className={scrolled}>
            <nav className='primaryNavigation'>
                <button id='menuToggle' onClick={activateMenu}>
                    <i className='ri-menu-2-line'></i>
                </button>
                <div className={`hamburgerMenu ${isActive}`}>
                    <a href='/' className='logoContainer'>
                        <img src={Logo} alt='logo' />
                    </a>
                    <ul>
                        <li><a href="/">Home</a></li>
                        <li><a href="/movies">Movies</a></li>
                        <li><a href="/contact">Contact</a></li>
                        <li><a href="/about">About</a></li>
                    </ul>
                </div>
                <div className='searchBar'>
                    <i className='ri-search-2-line'></i>
                    <input type='text' id='searchBar' name='searchBar' placeholder='Search' />
                </div>
                <div className='account'>
                    <p>
                        <a href="signin">Sign In </a>
                        |
                        <a href='register'> Register</a>
                    </p>
                </div>
            </nav>
        </header>
    );
};

export default Header;
