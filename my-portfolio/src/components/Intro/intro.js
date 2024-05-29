import React from 'react';
import './intro.css';
import me from '../../asset/me.jpg';
import {Link} from 'react-scroll';

const Intro = () => {
    return (
        <section id='intro'>
            <div className='introContent'>
                <span className='hello'>Hello,</span>
                <span className='introText'>I'm <span className='introName'>Rothchild!</span><br />From Centennial College</span>
                <p className='introPara'>As a dedicated programming student, my mission is to continuously advance my knowledge<br />and skills in software development through rigorous study, practical application, and innovative thinking.<br/>I am committed to mastering foundational concepts, exploring new technologies,<br />and staying updated with industry trends.  </p>
                <Link><button className="btn"><img src="" alt="" />About Me</button></Link>


            </div>
            <img src={me} alt="me" className="me"/>
        </section>
    )
}

export default Intro