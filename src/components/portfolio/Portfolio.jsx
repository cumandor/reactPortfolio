import { useState } from 'react';
import './portfolio.css';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function Portfolio() {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const CustomPrevArrow = (props) => (
    <button
      {...props}
      className="custom-prev-arrow"
      aria-label="Previous"
    ></button>
  );

  const CustomNextArrow = (props) => (
    <button
      {...props}
      className="custom-next-arrow"
      aria-label="Next"
    ></button>
  );

  const sliderSettings = {
    dots: false,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    prevArrow: <CustomPrevArrow />,
    nextArrow: <CustomNextArrow />,
  };

  return (
    <section className="portfolio">
      <div className="container">
        <div className="portfolio__inner">
          <Slider {...sliderSettings}>
            <div>
              {isHovered ? (
                <iframe
                  title="Demo"
                  src="https://cumandor.github.io/myPortfolio/"
                  width="100%"
                  height="100%"
                  frameBorder="0"
                ></iframe>
              ) : (
                <div
                  className="portfolio__image"
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseLeave}
                >
                
                  <div className="portfolio__overlay">
                    <p>Наведите для просмотра</p>
                  </div>
                </div>
              )}
            </div>
            <div>
              {isHovered ? (
                <iframe
                  title="Demo"
                  src="https://cumandor.github.io/toDoList/"
                  width="100%"
                  height="100%"
                  frameBorder="0"
                ></iframe>
              ) : (
                <div
                  className="portfolio__image"
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseLeave}
                >
               
                  <div className="portfolio__overlay">
                    <p>Наведите для просмотра</p>
                  </div>
                </div>
              )}
            </div>
           
          </Slider>
        </div>
      </div>
    </section>
  );
}

export default Portfolio;
