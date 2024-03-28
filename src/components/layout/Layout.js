// Layout.js
import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import { Route, Routes } from "react-router-dom";

import {
  NightModeProvider,
  useNightMode,
} from "../../context/NightModeContext";

const Home = React.lazy(() => import("../Home"));
const About = React.lazy(() => import("../info/PageAbout"));
const Plans = React.lazy(() => import("../plans/Plans"));
const Schedule = React.lazy(() => import("../schedule/Schedule"));
const Imc = React.lazy(() => import("../misc/Imc"));
const Contact = React.lazy(() => import("../misc/Contact"));

const Layout = () => {
  return (
    <NightModeProvider>
      <LayoutContent />
    </NightModeProvider>
  );
};

const LayoutContent = () => {
  const { nightMode } = useNightMode();

  return (
    <div className={`App ${nightMode ? "dark-mode" : "light-mode"}`.trimEnd()}>
      <div className="container-Header">
        <Header />
      </div>

      <div className="container-children">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Nosotros" element={<About />} />
          <Route path="/Planes" element={<Plans />} />
          <Route path="/Calendario" element={<Schedule />} />
          <Route path="/Imc" element={<Imc />} />
          <Route path="/Contacto" element={<Contact />} />

          {/* other page -> home */}
          <Route path="*" element={<Home />} />
        </Routes>
      </div>

      <div className="container-footer">
        <Footer />
      </div>
    </div>
  );
};

export default Layout;
