import './App.css';
import Home from './components/Home';
import About from './components/About';
import Plans from './components/Plans';
import Schedule from './components/Schedule';
import Imc from './components/Imc';
import Contact from './components/Contact';

import { NavLink, Route, Routes } from 'react-router-dom';
import { useEffect, useState } from 'react';

function App() {
  const [stateMenu, changeStateMenu] = useState(false)
  // console.log(stateMenu);

  // Scroll nav, change color
  const [scrollNavY, setScrollNavY] = useState(null);
  useEffect(() => {
      // run on scroll
      const updateScrollY = () => {
          const scrollY = window.pageYOffset;
          setScrollNavY(scrollY);
      };
      window.addEventListener("scroll", updateScrollY); // listener run on scroll
      return () => {
        window.removeEventListener("scroll", updateScrollY); // clean up (2)
    }
  }); 

  return (
    <div className="App">
      <header>
        <div className='container-navigation'>
          <div className='menu'>
            <div 
              className={`hamburguer-menu ${stateMenu ? 'active-menu' : ''}`.trimEnd()}  
              onClick={() => changeStateMenu(!stateMenu)}>
              <span />
            </div>
            <div className='navigation-background'>
              &nbsp; 
            </div>
            <nav className={`navigation-nav ${scrollNavY < 100 ? '' : 'change-nav'}`.trimEnd()}>
              <ul>
                <li><NavLink onClick={() => changeStateMenu(!stateMenu)} to='/'>Inicio</NavLink></li>
                <li><NavLink onClick={() => changeStateMenu(!stateMenu)} to='/about'>Sobre nosotros</NavLink></li>
                <li><NavLink onClick={() => changeStateMenu(!stateMenu)} to='/plans'>Planes</NavLink></li>
                <li><NavLink onClick={() => changeStateMenu(!stateMenu)} to='/schedule'>Horario</NavLink></li>
                <li><NavLink onClick={() => changeStateMenu(!stateMenu)} to='/imc'>IMC</NavLink></li>
                <li><NavLink onClick={() => changeStateMenu(!stateMenu)} to='/contact'>Contacto</NavLink></li>
              </ul>
            </nav>
          </div>
        </div>
      </header> 

      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/about' element={<About/>} />
        <Route path='/plans' element={<Plans/>} />
        <Route path='/schedule' element={<Schedule/>} />
        <Route path='/imc' element={<Imc/>} />
        <Route path='/contact' element={<Contact/>} />
        {/*  */}
        <Route path='*' element={<Home/>} />
      </Routes>
    </div>
  );
}

export default App;
