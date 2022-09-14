import '../style/why.css';
import joinUs from '../img/why-join.jpg';

export const Why = () => {
  return (
    <div className='container-why'>
      <div className='img-why'>
        <img src={joinUs} loading='lazy' alt='Hombre mostrando abdominales' title='Hombre abdominales'/>
      </div>
      <div className='text'>
        <h2><span>Por que </span> unirse?</h2>
        <div className='content'>
          <div className='text-content'>
            <h3>Entrenadores profesionales</h3>
            <p>
              Lorem ipsum dolor sit amet. Est sapiente distinctio At numquam consequuntur  quos commodi et internos dignissimos 
            </p>
          </div>
        </div>
        <div className='content'>
          <div className='text-content'>
            <h3>Ultimo en equipamiento</h3>
            <p>
              Lorem ipsum dolor sit amet. Est sapiente distinctio At numquam consequuntur  quos commodi et internos dignissimos vel 
            </p>
          </div>
        </div>
        <div className='content'>
          <div className='text-content'>
            <h3>Clases grupales</h3>
            <p>
              Lorem ipsum dolor sit amet. Est sapiente distinctio At numquam consequuntur  quos commodi et internos dignissimos vel
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Why;
