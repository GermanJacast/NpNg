import React from "react";
import { NavLink, useLocation } from "react-router-dom";
// import { Route, Routes } from "react-router-dom";
import { useEffect, useState } from "react";
import "../../style/layout/header.css";
import Logo from "../icons/Logo";

import { IoIosArrowForward } from "react-icons/io";

import { useNightMode } from "../../context/NightModeContext";

const Header = () => {
  // Estado para el color del tema (dark/light mode)
  const { nightMode, toggleNightMode } = useNightMode();
  // console.log(nightMode);
  // Estado para el menú (abierto/cerrado)
  const [stateMenu, changeStateMenu] = useState(false);
  // console.log(stateMenu);

  // Estado para almacenar la posición de desplazamiento vertical
  const [scrollNavY, setScrollNavY] = useState(null);

  // Efecto que se ejecuta al montar el componente y cada vez que se haga el scroll
  useEffect(() => {
    // Se ejecuta al desplazarse
    const updateScrollY = () => {
      // Obtener la posición de desplazamiento vertical
      const scrollY = window.pageYOffset;
      // Actualizar el estado con la posición de desplazamiento
      setScrollNavY(scrollY);
    };

    // Agregar un listener para el evento de desplazamiento
    window.addEventListener("scroll", updateScrollY);

    // Función de limpieza que se ejecuta al desmontar el componente
    return () => {
      window.removeEventListener("scroll", updateScrollY);
    };
  }, []); // El segundo argumento es un array vacío, lo que significa que el efecto se ejecutará solo al montar y desmontar el componente

  const { pathname } = useLocation();

  // Rutas...()
  const navLinks = [
    { to: "/", label: "Inicio" },
    { to: "/Nosotros", label: "Sobre nosotros" },
    { to: "/Planes", label: "Planes" },
    { to: "/Calendario", label: "Horario" },
    { to: "/Imc", label: "IMC" },
    { to: "/Contacto", label: "Contacto" },
  ];

  return (
    <div>
      <header>
        <div className="container-navigation">
          <div className="menu">
            <div
              className={`hamburguer-menu ${
                stateMenu ? "active-menu" : ""
              }`.trimEnd()}
              onClick={() => changeStateMenu(!stateMenu)}
            >
              <span />
            </div>
            <div
              className="navigation-background"
              onClick={() => changeStateMenu(!stateMenu)}
            >
              &nbsp;
            </div>
            <nav
              className={`navigation-nav ${
                scrollNavY < 100 ? "" : "change-nav"
              }`.trimEnd()}
            >
              <ul>
                {navLinks.map(({ to, label }) => (
                  <li key={to}>
                    <IoIosArrowForward />
                    <NavLink
                      onClick={() => changeStateMenu(!stateMenu)}
                      to={to}
                    >
                      {label}
                    </NavLink>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        </div>
        {/* dark-mode */}
        <div
          className={`container-mode ${
            scrollNavY < 699 && pathname === "/" && !stateMenu
              ? ""
              : "change-mode"
          }`.trimEnd()}
        >
          <span
            onClick={toggleNightMode}
            className={`${nightMode ? "none-icon" : ""}`.trimEnd()}
          >
            <Logo />
          </span>
        </div>
        {/*  */}
      </header>
      {/* Links */}
      <ScrollToTop />
    </div>
  );
};

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    // Ajusta la posición del desplazamiento al inicio cuando cambias de página
    window.scrollTo(0, 0);
  }, [pathname]);

  // Este componente no renderiza nada, simplemente ajusta el desplazamiento al inicio.
  return null;
}
// Rutas
export const routesConfig = [
  { path: "/Nosotros", title: "Acerca de nosotros" },
  { path: "/Planes", title: "Nuestros planes" },
  { path: "/Calendario", title: "Calendario" },
  { path: "/Imc", title: "Imc" },
  { path: "/Contacto", title: "Contacto" },
  // ... otras rutas
];

export default Header;
