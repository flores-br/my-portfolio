import './style.css';

const Menu = ({ active, setActive }) => {
  return (
    <div className={'menu ' + (active && 'active')}>
      <div className="menu-wrapper">
        <div className="menu-item">Intro</div>
        <div className="menu-item">Projects</div>
        <div className="menu-item">Contact</div>
      </div>
    </div>
  );
};

export default Menu;
