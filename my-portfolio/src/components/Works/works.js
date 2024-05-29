import React from 'react'
import './works.css';
import portfolio1 from '../../asset/portfolio1.jpg';
import portfolio2 from '../../asset/portfolio2.jpg';
import portfolio3 from '../../asset/portfolio3.jpg';
import portfolio4 from '../../asset/portfolio4.jpg';
import portfolio5 from '../../asset/portfolio5.jpg';



const Works = () => {
    return (
        <section id='works'>
        <h2 className='worksTitle'>My Projects</h2>
        <span class='worksDesc'>I take pride in paying attention to the smallest details and making sure that my work is pixel perfect. I am excited to brring my skills and experience to help businesses achieve their goals and create a strong online presence</span>
        <div className='worksImgs'>
            <img src={portfolio1} alt='portfolio1' className='worksImg' />
            <img src={portfolio2} alt='portfolio2' className='worksImg' />
            <img src={portfolio3} alt='portfolio3' className='worksImg' />
            <img src={portfolio4} alt='portfolio4' className='worksImg' />
            <img src={portfolio5} alt='portfolio5' className='worksImg' />
        </div>
        <button className='worksBtn'>See More</button>
        </section>
    );
}

export default Works