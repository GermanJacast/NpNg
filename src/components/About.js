import '../style/about.css';
import gallery01 from '../img/about-gallery01.jpg';
import gallery02 from '../img/about-gallery02.jpg';
import gallery03 from '../img/about-gallery03.jpg';
import gallery04 from '../img/about-gallery04.jpg';

const About = () => {
  return (
    <div className='container-about'>
      <div className='text'>
        <h2>Bienvenido a<span> NpNg</span></h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
          incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud 
          exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute 
          irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla 
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia 
          deserunt mollit anim id est laborum.</p>
          <br />
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
          incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud 
          exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute 
          irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla 
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia 
          deserunt mollit anim id est laborum.</p>
      </div>
      <div className='gallery-about'>
        <div className='principal'>
          <img src={gallery01} loading='lazy' alt='Hombre tirando poleas en gimnasio' title='Hombre gimnasio' />
        </div>
        <div>
          <img src={gallery02} loading='lazy' alt='Grupo de personas en gimnasio' title='Personas en gimnasio' />
          <img src={gallery03} loading='lazy' alt='Mujer realizando abdominales' title='Mujer haciendo abdominales' />
          <img src={gallery04} loading='lazy' alt='Equipamiento de un gimnasio' title='Equipamiento gimnasio' />
        </div>
      </div>
    </div>
  );
};

export default About;