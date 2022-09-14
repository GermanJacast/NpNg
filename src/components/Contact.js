import '../style/contact.css';
import { AiOutlineInstagram, AiOutlineFacebook, AiOutlineTwitter } from "react-icons/ai"; 

const Contact = () => {
  return (
    <div className='container-contact'>
      <div className='contact'>
        <div className='info'>
          <div className='title'>
            <h3>Contáctate con <span> nosotros</span></h3>
          </div>
          <div className='information'>
            <div className='content'>
              <h4>Dirección</h4>
              <p>0000 Av.X</p>
            </div>
            <div className='content'>
              <h4>Telefono</h4>
              <a href='https://api.whatsapp.com/send?phone=56911223344&text=Hola!%20quiero%20unirme' target='_blank' rel="noreferrer">+569 11223344</a>
            </div>
            <div className='content'>
              <h4>Email</h4>
              <p>contacto@npng.cl</p>
            </div>
            <div className='content'>
              <h4>Siguenos</h4>
              <i><AiOutlineInstagram className='icon' /></i>
              <i><AiOutlineFacebook className='icon' /></i>
              <i><AiOutlineTwitter className='icon' /></i>
            </div>
            <div className='content'>
              <h4>Horario</h4>
              <p>Lunes a Sabado <span>08:00 - 21:00</span></p>
              <p>Domingo <span>Cerrado</span></p>
            </div>
          </div>
        </div>
        <div className='form'>
          <h3>Envianos un<span> mensaje</span></h3>
          <form>
            <label>Nombre
              <input type='text' />
            </label>
            <label>Apellidos
              <input type='text' />
            </label>
            <label>Email
              <input type='email' />
            </label>
            <label>Teléfono
              {/* number */}
              <input type='text' />
            </label>
            <label>Mensaje
              <textarea />
            </label>
            <input type='submit' value='Enviar' />
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;