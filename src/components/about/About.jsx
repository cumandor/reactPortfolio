import './about.css';
import { BiBrain } from 'react-icons/bi';
import { HiOutlineStatusOnline } from 'react-icons/hi';
import { FaMedal } from 'react-icons/fa';
import AboutImg from '../../assets/img/self.jpg';
import CV from "../../assets/img/MyResume.pdf";
import Typist from 'react-typist';
import Typical from 'react-typical';

function About() {
  return (
    <section className="about">
      <div className="container">
        <div className="about__inner">
          <div className="about__image">
            <img className="about__img" src={AboutImg} alt="myselfie" />
          </div>
          <div className="about__column">
            <h1 className="about__title">
            <Typical
                            loop={Infinity}
                            wrapper='h2'
                            steps={[
                                'About Me',
                                2000,
                            ]}/>
            </h1>
            <h3 className='about__subtitle'>
              My introduction
            </h3>
            <p className="about__text">
              I am currently studying Cybersecurity at Sumy State University. I have a Junior Specialist education in Computer Technologies from the same university. As a frontend developer, I gained experience through freelancing for six months. I developed web applications using HTML, CSS, and JavaScript. Working independently and in teams improved my communication skills. I completed JavaScript and React courses from Lectrum, deepening my knowledge. I received a diploma from SoftServe, validating my JavaScript and OOP proficiency. I worked on personal projects with JavaScript and React to solidify my skills. Im passionate about web development and eager to grow professionally.
            </p>
            <div className="button-container">
              <a className="button-link" download={CV} href={CV}>Download resume</a>
            </div>
          </div>
        </div>
        <div className="about__block">
          <div className="about__block-item">
            <h3 className="about__block-title">Expiriance <FaMedal /></h3>
            <Typist avgTypingDelay={200} stdTypingDelay={5} cursor={{ show: false }}>
            <p className="about__block-text">1 year</p>
            </Typist>
          </div>
          <div className="about__block-item">
            <h3 className="about__block-title">Completed <BiBrain /></h3>
            <Typist avgTypingDelay={100} stdTypingDelay={5} cursor={{ show: false }}>
            <p className="about__block-text">16+ Projects</p>
            </Typist>
          </div>
          <div className="about__block-item">
            <h3 className="about__block-title">Online <HiOutlineStatusOnline /></h3>
            <Typist avgTypingDelay={200} stdTypingDelay={5} cursor={{ show: false }}>
            <p className="about__block-text">24/7</p>
            </Typist>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
