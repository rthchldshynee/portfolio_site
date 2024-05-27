import React from 'react';
import './Navbar.css';
import LOGO from '../../asset/LOGO.png'
import contact from '../../asset/contact.png';
import {Link} from 'react-scroll';

const Navbar = () => {
    return (
        <div class="logo-container">
        <nav className='navbar'>
            <img src={LOGO} alt="LOGO" className='LOGO'/>
            <div className='desktopMenu'>
                <Link className='desktopMenuListItem'>Home</Link>
                <Link className='desktopMenuListItem'>About Me</Link>
                <Link className='desktopMenuListItem'>Projects</Link>
                <Link className='desktopMenuListItem'>Services</Link>

            </div>
           <button className='desktopMenuBtn'>
            <img src={contact} alt="contact" className='contact' />Contact Me
           </button>
        </nav>
        </div>
    )
}

export default Navbar