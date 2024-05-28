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
                <p className='introPara'>gfjdsgfjsdkjfhsdjflsdkjfkljsdklfjsdlkjfklsdjfkljsdlkfjsd<br />lkjfklsdjfklsdjfkljsdfkljsdklfjkds</p>
                <Link><button className="btn"><img src="" alt="" />Hire Me</button></Link>


            </div>
            <img src={me} alt="me" className="me"/>
        </section>
    )
}

export default Intro