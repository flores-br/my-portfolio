import { useState } from 'react';
import Intro from './components/Intro';
import Menu from './components/Menu';
import Navbar from './components/Navbar';

const App = () => {
  const [active, setActive] = useState(false);
  return (
    <>
      <Navbar active={active} setActive={setActive} />
      <Menu active={active} setActive={setActive} />
      <Intro />
    </>
  );
};

export default App;
