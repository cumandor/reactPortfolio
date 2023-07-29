import { useState, useEffect } from 'react';
import { Gradient } from './assets/styles/Gradient';
import { useTransition, animated } from '@react-spring/web';
import { Routes, Route, useLocation } from 'react-router-dom';
import Header from './components/header/Header';
import Home from './components/home/Home';
import About from './components/about/About';
import Skills from './components/skills/Skills';
import Portfolio from './components/portfolio/Portfolio';
import Contact from './components/contact/Contact';

function App() {
  const location = useLocation();
  const [isCanvas2Visible, setCanvas2Visible] = useState(false);

  const handleToggleTheme = () => {
    setCanvas2Visible(!isCanvas2Visible);
  };

  const transitions = useTransition(location.pathname, {
    key: location.pathname,
    from: {
      opacity: 0,
      transform: 'translateX(100%)',
    },
    enter: {
      opacity: 1,
      transform: 'translateX(0%)',
    },
    leave: {
      opacity: 0,
      transform: 'translateX(-100%)',
    },
  });

  useEffect(() => {
    const gradient = new Gradient();
    gradient.initGradient('#gradient-canvas');
    const gradient2 = new Gradient();
    gradient2.initGradient('#gradient-canvas2');
  }, []);

  return (
    <>
      <Header handleToggleTheme={handleToggleTheme} isCanvas2Visible={isCanvas2Visible} />
      <div id='fade-background'>
        <div className="wrapper" style={{ position: 'relative', overflow: 'hidden', minHeight: '100vh' }}>
          <button className='bgswithc1' id="theme-toggle" onClick={handleToggleTheme}></button>
            
          {transitions((props, item, key) => (
            <animated.div key={key} style={props}>
              <div style={{ position: 'absolute', width: '100%' }}>
                <Routes location={item}>
                  <Route path="/" element={<Home />} />
                  <Route path="/about" element={<About />} />
                  <Route path="/skills" element={<Skills />} />
                  <Route path="/portfolio" element={<Portfolio />} />
                  <Route path="/contact" element={<Contact />} />
                </Routes>
              </div>
            </animated.div>
          ))}
        </div>
      </div>
      <style>
        {`
          #gradient-canvas2 {
            visibility: ${isCanvas2Visible ? 'visible' : 'hidden'};
          }
        `}
      </style>
    </>
  );
}

export default App;
