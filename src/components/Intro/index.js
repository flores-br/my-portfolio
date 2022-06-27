import './style.css';
import Batman from '../../assets/batman.png';

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
          <p className="desc">
            I'm a Computer Science student from Montreal who graduated from the
            Western Governors University in June 2022. I will be pursuing a
            Master's degree in the same field at Georgia Tech (OMSCS) starting
            Fall 2022. I love meeting new people and my favourite hobbies
            include going out, watching movies and playing video games. I am
            currently open to entry level software development opportunities or
            internships.
          </p>
        </div>
      </div>
      <div className="right">
        <div className="right-bg"></div>
        <img src={Batman} alt="Lego Batman" className="batman" />
      </div>
    </div>
  );
};

export default Intro;
