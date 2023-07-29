import './home.css';
import { AiOutlineInstagram } from 'react-icons/ai';
import { AiFillGithub } from 'react-icons/ai';
import { AiFillLinkedin } from 'react-icons/ai';
import Typical from 'react-typical';
import Typist from 'react-typist';

function Home()  {
    
  return (
        <section className="home">
            <div className="container">
                <div className="home__inner">
                    <div className="home__column1">
                        <h1 className="home__title">
                            <Typical
                            loop={Infinity}
                            wrapper='p'
                            steps={[
                                'Mykhailo Volovik',
                                1000,
                            ]}/>
                        </h1>
                        <h3 className='home__subtitle'>
                            <Typist avgTypingDelay={50} stdTypingDelay={5} cursor={{ show: false }}>
                                Frontend developer
                            </Typist>
                        </h3>
                        <p className="home__text">Hello!
                        <br/><br/>
                        Im Misha, and I really enjoy frontend development. I dream of finding a good job, growing, and becoming better in this field. I hope you appreciate the skills Ive put into this website.<br/>
                        Enjoy!
                        </p>
                    </div>
                    <div className="home__column">
                        <div className="home__img">
                            <img src="" alt="" />
                        </div>
                        <ul className="home__link">
                            <li className="home__link-item">
                                <a className='home_' href="">
                                    <AiOutlineInstagram />
                                </a>
                            </li>
                            <li className="home__link-item">
                                <a className='home_' href="https://github.com/cumandor" target="_blank" rel="noopener noreferrer">
                                    <AiFillGithub />
                                </a>
                            </li>
                            <li className="home__link-item">
                                <a className='home_' href="https://www.linkedin.com/in/wd322volovik/" target="_blank" rel="noopener noreferrer">
                                    <AiFillLinkedin />
                                </a>
                            </li>
                            
                        </ul>
                    </div>
                </div>
            </div>
        </section>
  );
}

export default Home;
