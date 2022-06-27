import './style.css';

const Navbar = ({ active, setActive }) => {
  return (
    <nav className={'navbar ' + (active && 'active')}>
      <div className="nav-left">
        <h1 className="nav-title">My Portfolio.</h1>
      </div>
      <div className="nav-right">
        <div
          className={'hamburger ' + (active && 'active')}
          onClick={() => setActive(!active)}
        >
          <span className="line"></span>
          <span className="line"></span>
          <span className="line"></span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
