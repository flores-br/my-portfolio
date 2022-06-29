import './style.css';

const Menu = ({ active, setActive }) => {
  return (
    <div className={'menu ' + (active && 'active')}>
      <div className="menu-wrapper">
        <a href="#intro" className="menu-item">
          Intro
        </a>
        <a href="#projects" className="menu-item">
          Projects
        </a>
        <a href="#contact" className="menu-item">
          Contact
        </a>
      </div>
    </div>
  );
};

export default Menu;
