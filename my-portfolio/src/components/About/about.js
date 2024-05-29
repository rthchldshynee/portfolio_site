import React from 'react';
import './about.css';
import photo1 from '../../asset/photo1.jpg'
import photo2 from '../../asset/photo2.jpg';
import photo3 from '../../asset/photo3.jpg';
import photo4 from '../../asset/photo4.jpg';
import photo5 from '../../asset/photo5.jpg';

const About = () => {
  return (
    <div className="about-container">
      <div className="about-content">
        <h1>About me</h1>
        <p className="subtitle">I'm a Software Engineering Technician Student at Centennial Colleges and I am proud to be Filipino.</p>
        <p>
          I enjoy taking complex problems and turning them into simple and beautiful interface designs. I also love the logic and structure of coding and always strive to write elegant and efficient code, whether it be HTML, CSS or jQuery.
        </p>
        <p>Also included in this portfolio are my resume, a vision statement briefly outlining my professional philosophies and beliefs, and a professional development plan highlighting my evolvement throughout my program and how I intend to continue to grow professionally</p>
        <p>
          When I'm not coding or pushing pixels, you'll find me in our house hanging out with my awesome husband while cooking and enjoy life together.
        </p>

        <p>"Learning to write programs stretches your mind and helps you think better, creates a way of thinking about things that I think is helpful in all domains." – Bill Gates
          </p>
        <div className="social-buttons">
          <button className="like-button">Like 4.5k</button>
          <button className="follow-button">Follow @rthchldshynee</button>
          <button className="resume-link">
            <a href="myresume.pdf" target="_blank" rel="noopener noreferrer">Download My Resume</a></button>
        </div>
        
      </div>
      
      <div className="photo-gallery">
        <img src={photo1} alt="Photo 1" />
        <img src={photo2} alt="Photo 2" />
        <img src={photo3} alt="Photo 3" />
        <img src={photo4} alt="Photo 4" />
        <img src={photo5} alt="Photo 5" />



      </div>
    </div>
  );
};

export default About;
