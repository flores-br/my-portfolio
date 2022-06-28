import './style.css';
import { projectList, progIcons } from '../../data';
import {
  BsFillArrowLeftCircleFill,
  BsFillArrowRightCircleFill,
} from 'react-icons/bs';
import { SiGithub } from 'react-icons/si';
import { ImLink } from 'react-icons/im';
import { useState } from 'react';

const ImgSlider = () => {
  const [current, setCurrent] = useState(0);
  const length = projectList.length;

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  return (
    <div className="img-slider">
      <BsFillArrowLeftCircleFill className="left-arrow" onClick={prevSlide} />
      <BsFillArrowRightCircleFill className="right-arrow" onClick={nextSlide} />
      {projectList.map((slide, index) => {
        return (
          <div
            className={index === current ? 'slide active' : 'slide'}
            key={index}
          >
            {index === current && (
              <div
                className="img"
                style={{
                  backgroundImage: `url(${slide.image})`,
                }}
              >
                <div className="info">
                  <div className="info-wrapper">
                    <div className="info-left">
                      <h1 className="info-title">{slide.title}</h1>
                      <div className="info-desc">{slide.description}</div>
                    </div>
                    <div className="info-right">
                      <div className="i-wrapper">
                        {slide.tools.map((tool, key) => {
                          return (
                            <div className="i">
                              {tool.obj}
                              <span className="i-title">{tool.name}</span>
                            </div>
                          );
                        })}
                      </div>
                      <div className="links">
                        {slide.url && (
                          <a href={slide.url} target="_blank" rel="noreferrer">
                            <ImLink className="link-icon" />
                          </a>
                        )}
                        <a href={slide.github} target="_blank" rel="noreferrer">
                          <SiGithub className="link-icon" />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default ImgSlider;
