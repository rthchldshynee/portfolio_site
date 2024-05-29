import React from 'react'
import './contact.css';
import facebookIcon from '../../asset/facebook-icon.png';
import twitter from '../../asset/twitter.png';
import youtube from '../../asset/youtube.jpg';
import instagram from '../../asset/instagram.jpg';

const Contact = () => {
    return (
        <section id='contactPage'>
            <div id='contact'>
            <h1 className='contactPageTitle'>Contact Me</h1>
            <span className='contactDesc'>Please fill out the form below to discuss any work opportunities</span>
            <form className='contactForm'>
                <input type='text' className='name' placeholder='Your Name' />
                <input type='email' className='email' placeholder='Your Email' />
                <textarea className='msg' name='message' rows={5} placeholder='Your Message'></textarea>
                <button type='submit' value='Send' className='submitBtn'>Submit</button>
                <div className='links'>
                    <img src={facebookIcon} alt='facebook' className='link' />
                    <img src={twitter} alt='twitter' className='link' />
                    <img src={youtube} alt='youtube' className='link' />
                    <img src={instagram} alt='instagram' className='link' />
                </div>

            </form>
            

            </div>
        </section>
    )
}

export default Contact