import './style.css';
import { projectList } from '../../data';

const ImgSlider = () => {
  return (
    <div className="img-slider">
      {projectList.map((slide, index) => {
        return <img src={slide.image} alt="slide" />;
      })}
    </div>
  );
};

export default ImgSlider;
