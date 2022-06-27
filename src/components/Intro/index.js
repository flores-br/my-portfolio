import './style.css';

const Intro = () => {
  return (
    <div className="intro">
      <div className="left">
        <div className="left-wrapper">
          <h2 className="intro-text">Hello, world! My name is</h2>
          <h1 className="intro-name">Bryan Flores</h1>
          <div className="slider">
            <div className="slider-item">Student</div>
            <div className="slider-item">Coder</div>
            <div className="slider-item">Learner</div>
            <div className="slider-item">Movie Buff</div>
            <div className="slider-item">Gamer</div>
          </div>
        </div>
      </div>
      <div className="right"></div>
    </div>
  );
};

export default Intro;
