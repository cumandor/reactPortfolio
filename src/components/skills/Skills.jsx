import './skills.css';
import Modal from '../modal/Modal';
import { useState } from 'react';
import Typical from 'react-typical';

function Skills() {
    const [modalActive, setModalActive] = useState(false)
  return (

    <section className="skills">
 <Modal active={modalActive} setActive={setModalActive}>
    <p><b><i>Course from Lectrum on JavaScript:</i></b><br />
        Completed a course from Lectrum where I expanded my knowledge of JavaScript.
        Gained experience in solving various tasks and developing projects using JavaScript.
        <br /><br />
        <b><i>Course from Lectrum on React and Redux:</i></b><br />
        Completed a course from Lectrum where I mastered the fundamental concepts of React and Redux.
        <br /><br />
        <b><i>Diploma from SoftServe:</i></b><br />
        Received a diploma from SoftServe confirming my knowledge of basic concepts and basic JavaScript OOP.</p>
            </Modal>

      <div className="container">
        <div className="skills__inner">
            <h1 className='skills__title'>
            <Typical
                            loop={Infinity}
                            steps={[
                                'My Skills',
                                2000,
                            ]}/>
            </h1>
        <div className="skills__column">
            <h2 className="skills__subtitle">
            Hard skills
            </h2>
            <p className="skills__text">
            I am a frontend developer specializing in React. My hard skills include <b><i>HTML</i></b>, <b><i>CSS</i></b>, <b><i>JavaScript</i></b>, and <b><i>React</i></b>. I can create components, manage state using React Hooks, and work with APIs. I am also familiar with Git, npm, and VS Code. I am ready to work in a team and continuously learn. I am seeking an opportunity to apply my skills in developing frontend applications using React.
            </p>
            <button className='skills__modal-btn' onClick={() => setModalActive(true)}>My Diplomas and Courses</button>
          </div>
        <div className="skills__column">
            <h2 className="skills__subtitle">
            Soft skills
            </h2>
            <p className="skills__text">
              I am currently studying Cybersecurity at Sumy State University. I have a Junior Specialist education in Computer Technologies from the same university. As a frontend developer, I gained experience through freelancing for six months. I developed web applications using HTML, CSS, and JavaScript. Working independently and in teams improved my communication skills. I completed JavaScript and React courses from Lectrum, deepening my knowledge. I received a diploma from SoftServe, validating my JavaScript and OOP proficiency. I worked on personal projects with JavaScript and React to solidify my skills. Im passionate about web development and eager to grow professionally.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skills;
