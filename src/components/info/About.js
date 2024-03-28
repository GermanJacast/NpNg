import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import "../../style/info/about.css";

import gallery01 from "../../img/about/about-gallery01.webp";
import gallery02 from "../../img/about/about-gallery02.webp";
import gallery03 from "../../img/about/about-gallery03.webp";
import gallery04 from "../../img/about/about-gallery04.webp";

const About = () => {
  const settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <div className="container-about">
      <div className="content-about">
        <div className="text">
          <h2>
            Bienvenido a<b> NpNg</b>
          </h2>
          <p>
            En <b>No Pain No Gain</b>, no solo creamos músculos, creamos un
            estilo de vida saludable. Con instalaciones modernas y un compromiso
            inquebrantable con el bienestar, nos enorgullece ser mucho más que
            un simple gimnasio. Desde nuestros inicios, hemos dedicado años a
            perfeccionar el arte del entrenamiento, transformando vidas y
            cultivando fuerza para cada día.
          </p>
        </div>
        <div className="gallery-about">
          <div className="content-gallery">
            <div className="secondary">
              <Slider {...settings}>
                <img
                  src={gallery02}
                  loading="lazy"
                  alt="Moderna instalacion con maquinas de gimnasio"
                  title="Maquinas de gimnasio"
                />
                <img
                  src={gallery01}
                  loading="lazy"
                  alt="Area de empuje en el gimnasio"
                  title="Area del gimnasio"
                />
                <img
                  src={gallery03}
                  loading="lazy"
                  alt="Zona de comida en el gimnasio"
                  title="Zona de comida"
                />
                <img
                  src={gallery04}
                  loading="lazy"
                  alt="Area para diferentes clases"
                  title="Lugar para clases"
                />
              </Slider>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
