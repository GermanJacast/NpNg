import React from "react";
import { NavLink } from "react-router-dom";

import "../../style/info/pageAbout.css";

import { FaBullseye } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";
import { FaBalanceScale } from "react-icons/fa";
import { IoIosArrowDown } from "react-icons/io";
import welcome from "../../img/about/about-page/about-page-01.webp";
import discover from "../../img/about/about-page/about-page-02.webp";
import egallery01 from "../../img/about/about-page/about-page-03.webp";
import egallery02 from "../../img/about/about-page/about-page-04.webp";
import egallery03 from "../../img/about/about-page/about-page-05.webp";

// import About from "./About";

const PageAbout = () => {
  return (
    <div className="container-page-about">
      <div className="about-welcome">
        <div className="welcome-image">
          <img
            src={welcome}
            loading="lazy"
            alt="Hombre empujando trineo con peso"
            title="Hombre empujando trineo con peso"
          />
        </div>
        <div className="welcome-text">
          <div className="container-text">
            <h2>
              <b>No Pain No Gain</b>
            </h2>
            <p>Donde la fuerza se encuentra con la dedicación</p>
            <p>Y cada paso te acerca a la mejor versión de ti mismo.</p>
          </div>
        </div>
        <div className="welcome-arrow-down">
          <div className="arrow-down">
            <span />
            <span>
              <IoIosArrowDown />
            </span>
          </div>
        </div>
      </div>

      <div className="discover ">
        <div className="content-discover">
          <div className="discover-image">
            <img
              src={discover}
              loading="lazy"
              alt="Grupo de personas felices luego de un dia de gimnasio"
              title="Personas del gimnasio"
            />
          </div>
          <div className="discover-text">
            <p>
              En <b>No Pain No Gain, </b>
            </p>
            <p>más que máquinas modernas, </p>
            <p>encontrarás una comunidad </p>
            <p>que te inspirará superar límites </p>
            <p>y lograr un bienestar completo.</p>
            <div className="discover-dude">
              <p>¿Aún dudas de nosotros?</p>
              <NavLink to="/contacto">Cuéntanos aquí</NavLink>
            </div>
          </div>
        </div>
      </div>

      <div className="mission ">
        <h3>Conoce nuestro propósito</h3>
        <div className="our-mission">
          <div className="mission-content">
            <i>
              <FaBullseye />
            </i>
            <h4>Inspirar y capacitar</h4>
            <p>Salud y bienestar.</p>
            <p>Entrenamiento que va más allá de lo físico.</p>
          </div>
          <div className="mission-content">
            <i>
              <FaHeart />
            </i>
            <h4>Fuerza interna</h4>
            <p>Transformación desde adentro.</p>
            <p>Descubre tu fortaleza interna.</p>
          </div>
          <div className="mission-content">
            <i>
              <FaBalanceScale />
            </i>
            <h4>Bienestar completo</h4>
            <p>Camino hacia el bienestar holístico.</p>
            <p>Equilibrio mental y físico.</p>
          </div>
        </div>
      </div>

      <div className="experience">
        <div className="content-experience">
          <h3>Experiencia de Entrenamiento Única</h3>
          <div className="experience-point">
            <div className="content-experience-point">
              <h4>Personalización Total</h4>
              <ul>
                <li>
                  <p>
                    Descubre la diferencia en <b>No Pain No Gain</b>.
                  </p>
                </li>
                <li>
                  <p>
                    Ofrecemos una experiencia de entrenamiento única y
                    personalizada.
                  </p>
                </li>
                <li>
                  <p>
                    Nuestro equipo apasionado está dedicado a guiarte en cada
                    paso de tu viaje fitness.
                  </p>
                </li>
              </ul>
            </div>
            <div className="content-experience-image">
              <img
                src={egallery01}
                loading="lazy"
                alt="Moderna instalacion con maquinas de gimnasio"
                title="Maquinas de gimnasio"
              />
            </div>
            <div className="content-experience-point">
              <h4>Variedad y Emoción</h4>
              <ul>
                <li>
                  <p>Desde programas adaptados hasta clases emocionantes.</p>
                </li>
                <li>
                  <p>Compromiso total en desafiar y elevar tus límites.</p>
                </li>
                <li>
                  <p>
                    Sumérgete en un mundo de variedad y emoción con clases para
                    todos los niveles.
                  </p>
                </li>
              </ul>
            </div>
            <div className="content-experience-image">
              <img
                src={egallery02}
                loading="lazy"
                alt="Moderna instalacion con maquinas de gimnasio"
                title="Maquinas de gimnasio"
              />
            </div>
            <div className="content-experience-point">
              <h4>Cada Gota Cuenta</h4>
              <ul>
                <li>
                  <p>
                    Cada sesión está diseñada para acercarte a tus objetivos.
                  </p>
                </li>
                <li>
                  <p>
                    Hacemos que cada gota de sudor cuente en tu viaje hacia la
                    mejor versión de ti mismo.
                  </p>
                </li>
              </ul>
            </div>
            <div className="content-experience-image">
              <img
                src={egallery03}
                loading="lazy"
                alt="Moderna instalacion con maquinas de gimnasio"
                title="Maquinas de gimnasio"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="success">
        <div className="content-success">
          <h3>Comprometidos con tu Éxito</h3>
          <p>
            Nuestra historia se ha construido sobre el éxito de nuestros
            miembros. Cada logro, cada superación, es nuestra razón de ser. En{" "}
            <b>No Pain No Gain</b>, no solo te ayudamos a alcanzar tus metas,
            sino que celebramos cada victoria contigo. Somos más que un
            gimnasio, somos tu aliado en el camino hacia una vida más fuerte y
            saludable.
          </p>
          <p>
            Tu éxito es nuestro éxito. En <b>No Pain No Gain</b>, nos
            enorgullece ser testigos de cada paso de tu progreso. Desde los
            pequeños logros hasta las metas más ambiciosas, estamos aquí para
            apoyarte en cada etapa de tu viaje, garantizando que cada esfuerzo
            se traduzca en un éxito duradero.
          </p>
        </div>
      </div>
    </div>
  );
};

export default PageAbout;
