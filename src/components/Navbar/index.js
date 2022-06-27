import { useState } from 'react';
import './style.css';

const Navbar = () => {
  const [active, setActive] = useState(false);
  return (
    <nav className="navbar">
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
