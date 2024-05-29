import React, { useState } from 'react';
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
                <Link activeClass='active' to= 'intro' spy={true} smooth={true} offset={-100} duration={500} className='desktopMenuListItem'>Home</Link>
                <Link activeClass='active' to= 'about' spy={true} smooth={true} duration={500} className='desktopMenuListItem'>About Me</Link>
                <Link activeClass='active' to= 'works' spy={true} smooth={true} duration={500} className='desktopMenuListItem'>Projects</Link>
                <Link activeClass='active' to= 'skills' spy={true} smooth={true} offset={-0} duration={500} className='desktopMenuListItem'>Services</Link>

            </div>
           <button className='desktopMenuBtn' onClick={() => {
            document.getElementById('contact').scrollIntoView({behavior: 'smooth'});
           }} >
            <img src={contact} alt="contact" className='contact' />Contact Me</button>


        </nav>
    </div>

    )
}


export default Navbar