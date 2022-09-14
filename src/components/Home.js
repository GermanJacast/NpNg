import '../style/home.css';
import Logo from '../img/Logo-NpNg.png';
import BackgroundHome from '../img/BackHome.jpg';
import About from './About';
import Plans from './Plans';
import Schedule from './Schedule';
import Imc from './Imc';
import Contact from './Contact';
import Why from './Why';
import { NavLink } from 'react-router-dom';

export const Home = () => {
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
      <About />
      {/* Why */}
      <hr />
      <Why />
      {/* Plans */}
      <hr />
      <Plans />
      {/*  */}
      <hr />
      <Schedule />
      {/* IMC */}
      <hr />
      <Imc />
      {/* Contact */}
      <hr />
      <Contact />
      
    </div>
  );
};

export default Home;
