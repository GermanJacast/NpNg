import { NavLink } from "react-router-dom";
import "../style/home.css";

import BackgroundHome from "../img/home/BackHome.webp";

import Plans from "./plans/Plans";
import About from "./info/About";
import Why from "./info/Why";
import Schedule from "./schedule/Schedule";
import Imc from "./misc/Imc";

export const Home = () => {
  return (
    <div>
      <div className="container-home">
        <div className="background-home">
          <img
            loading="lazy"
            src={BackgroundHome}
            alt="Mujer levantando pesas"
            title="Mujer levantando pesas"
          />
        </div>
        <div className="text">
          <h1>Vuelvete fuerte</h1>
          <h2>Se imparable con trabajo duro</h2>
          <p>
            <span>No Pain No Gain </span>
            cuenta con una gran sala, y con lo ultimo en maquinaria para
            ejercitar cada parte del cuerpo y aumentar aun más la FUERZA.
            <br />
            Se parte del club en donde todos quieren mutar.
          </p>
          <div className="link">
            <NavLink to="/plans">Unirse</NavLink>
          </div>
        </div>
      </div>

      {/* About */}
      <div className="bkg-primary">
        <About />
      </div>

      {/* Plans */}
      <div className="bkg-secondary">
        <Plans />
      </div>

      {/* Why */}
      <div className="bkg-primary">
        <Why />
      </div>

      {/* Schedule */}
      <div className="bkg-secondary">
        <Schedule />
      </div>

      {/* IMC */}
      <div className="bkg-primary">
        <Imc />
      </div>
    </div>
  );
};

export default Home;
