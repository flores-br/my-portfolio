import './style.css';
import { projectList } from '../../data';
import {
  BsFillArrowLeftCircleFill,
  BsFillArrowRightCircleFill,
} from 'react-icons/bs';
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
                style={{ backgroundImage: `url(${slide.image})` }}
              ></div>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default ImgSlider;
