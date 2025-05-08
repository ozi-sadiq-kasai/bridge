import './Nav.css';
import { useState } from 'react';
import { assets } from '../../assets/bridgePoint_assets/assets';
import { CiMenuFries } from "react-icons/ci";

const Nav = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className='nav'>
            <div className='nav-container'>
                <div className='nav-logo'>
                    <img src={assets.Logo} alt="logo" className='logo' />
                </div>

                <ul className={`nav-links ${isOpen ? 'open' : ''}`}>
                    <li><a href="/">Home</a></li>
                    <li><a href="/about">About Us</a></li>
                    <li><a href="/process">Our Process</a></li>
                    <li><a href="/faq">FAQ</a></li>
                    <li><a href="/get-started" className='get-started-mobile'>Get Started</a></li>
                </ul>

                <div className='nav-actions'>
                    <a href="/get-started" className='get-started'>Get Started</a>
                    <CiMenuFries
                        size={28}
                        className='menu-icon'
                        onClick={() => setIsOpen(prev => !prev)}
                    />
                </div>
            </div>
        </nav>
    );
};

export default Nav;
