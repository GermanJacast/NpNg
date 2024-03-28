import React from "react";
import {
  AiOutlineInstagram,
  AiOutlineFacebook,
  AiOutlineTwitter,
} from "react-icons/ai";
import "../../style/layout/footer.css";

const Footer = () => {
  return (
    <div className="container-contact">
      <div className="contact">
        <div className="info">
          <div className="title">
            <h4>
              Contáctate con <span> nosotros</span>
            </h4>
          </div>
          <div className="information">
            <div className="content">
              <h5>Dirección</h5>
              <p>
                #0000 <span>Av. NpNg</span>
              </p>
            </div>
            <div className="content">
              <h5>Teléfono</h5>
              <a
                href="https://api.whatsapp.com/send?phone=56911223344&text=Hola!%20quiero%20unirme"
                target="_blank"
                rel="noreferrer"
              >
                +569 <span>13579246</span>
              </a>
            </div>
            <div className="content">
              <h5>Horario</h5>
              <p>
                Lunes a Sabado <span>08:00 - 23:00</span>
              </p>
              <p>
                Domingo <span>Cerrado</span>
              </p>
            </div>
          </div>
        </div>
        <div className="form">
          <h4>
            Envianos un<span> mensaje</span>
          </h4>
          <form>
            <label>
              Nombre
              <input type="text" />
            </label>
            <label>
              Apellidos
              <input type="text" />
            </label>
            <label>
              Email
              <input type="email" />
            </label>
            <label>
              Teléfono
              {/* number */}
              <input type="text" />
            </label>
            <label>
              Mensaje
              <textarea />
            </label>
            <input type="submit" value="Enviar" />
          </form>
        </div>
      </div>
      <div className="social">
        <i>
          <AiOutlineInstagram className="icon" />
        </i>
        <i>
          <AiOutlineFacebook className="icon" />
        </i>
        <i>
          <AiOutlineTwitter className="icon" />
        </i>
      </div>
    </div>
  );
};

export default Footer;
