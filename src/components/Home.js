import '../style/home.css';
import Logo from '../img/Logo-NpNg.png';
import BackgroundHome from '../img/BackHome.jpg';
import About from './About';
import Plans from './Plans';
import Imc from './Imc';
import Schedule from './Schedule';
import Contact from './Contact';
import Why from './Why';
import { NavLink } from 'react-router-dom';
import { useEffect, useRef } from 'react';

export const Home = () => {

  const elementRef = useRef();
  const elementRefOne = useRef();
  const elementRefTwo = useRef();
  const elementRefThree = useRef();
  const elementRefFour = useRef();
  const elementRefFive = useRef();

  useEffect(() =>{
    const change = (entries) => {
      entries.forEach((entrie) =>{
        if(entrie.isIntersecting){
          entrie.target.className = 'one'
          observer.disconnect();
        }
      });
    };
    let options = {
      root: null,
      rootMargin: '200px 0px 600px 0px',
      threshold: 1.0
    };
    const observer = new IntersectionObserver(change, options);
    observer.observe(elementRef.current);
    observer.observe(elementRefOne.current);
    observer.observe(elementRefTwo.current);
    observer.observe(elementRefThree.current);
    observer.observe(elementRefFour.current);
    observer.observe(elementRefFive.current);

    return () => {
      observer.disconnect();
    };
  });

  return (
    <div>
      <div className='container-home'>
        <div className='background-home'>
          <img loading='lazy' src={BackgroundHome} alt='Mujer levantando pesas' title='Mujer con pesa' />
        </div>
        <div className='text'>
          <h1>Vuelvete fuerte</h1>
          <h2>Se imparable con trabajo duro</h2>
          <p>
            <span>No Pain No Gain </span> 
            cuenta con una gran sala, y con lo ultimo
            en maquinaria para ejercitar cada del
            cuerpo y aumentar aun más la FUERZA.
            <br />
            Se parte del club en donde todos quieren mutar. 
          </p>
          <div className='link'>
            <NavLink to='/plans'>Planes</NavLink>
          </div>
        </div>
        <div className='logo'>
          <img loading='lazy' src={Logo} alt='Logo no pain no gain' title='Logo' />
        </div>
      </div>

      {/* About */}
      <div ref={elementRef} className='zero'>
        <About />
      </div>
      {/* Why */}
      <hr />
      <div className='blk'>
        <div ref={elementRefOne} className='zero'>
          <Why />
        </div>
      </div>
      {/* Plans */}
      <hr />
      <div ref={elementRefTwo} className='zero'>
        <Plans />
      </div>
      {/* Schedule */}
      <hr />
      <div className='blk'>
        <div ref={elementRefThree} className='zero'>
          <Schedule />
        </div>
      </div>
      {/* IMC */}
      <hr />
      <div ref={elementRefFour} className='zero'>
        <Imc />
      </div>
      {/* Contact */}
      <hr />
      <div className='blk'>
        <div ref={elementRefFive} className='zero'>
          <Contact />
        </div>
      </div>
    </div>
  );
};

export default Home;
