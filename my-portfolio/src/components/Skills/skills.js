import React from 'react';
import './skills.css';
import UIDesign from '../../asset/ui-design.png';
import webDesign from '../../asset/web-design.png';
import appDesign from '../../asset/app-design.png'

const Skills = () => {
    return (
        <section id='skills'> 
        <span className='skillTitle'>Services Offered</span>
        <span className='skillDesc'>I am a dedicated and passionate student who studies software engineering, we are learning react and we uses create react app to learn UI, Web, and App design </span>
        <div className='skillsBars'>
            <div className='skillBar'>
            <img src={UIDesign} alt='UIDesign' className='skillBarImg' />
            <div className='skillBarText'>
                <h2>UI/UX Design</h2>
                <p>This is a demo text, whatever whatever, This is a demo text, whatever whatever,</p>
            </div>
        </div>
        </div>
        <div className='skillsBars'>
        <div className='skillBar'>
            <img src={webDesign} alt='webDesign' className='skillBarImg' />
            <div className='skillBarText'>
                <h2>Website Design</h2>
                <p>This is a demo text, whatever whatever, This is a demo text, whatever whatever,</p>
            </div>
        </div>
        </div>
        <div className='skillsBars'>
        <div className='skillBar'>
            <img src={appDesign} alt='appDesign' className='skillBarImg' />
            <div className='skillBarText'>
                <h2>App Design</h2>
                <p>This is a demo text, whatever whatever, This is a demo text, whatever whatever,</p>
            </div>
        </div>
        </div>
        
        </section>
    )
}

export default Skills;