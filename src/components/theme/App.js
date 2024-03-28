import React from "react";
import { Suspense, useEffect } from "react";
import { useLocation } from "react-router-dom";
import "../../style/theme/App.css";
// import Header from "../layout/Header";
import Layout from "../layout/Layout";
import Loading from "../misc/Loanding";
//
import { routesConfig } from "../layout/Header";

function App() {
  const { pathname } = useLocation();

  useEffect(() => {
    // console.log("Hidden:", document.hidden);
    // console.log("VisibilityState:", document.visibilityState);
    const handleVisibilityChange = () => {
      //  Condición si la pagina no esta visible y si no se encuentra en primer plano
      if (document.hidden && document.visibilityState !== "visible") {
        // console.log("not visible");
        setComeBackMessage();
      } else {
        // console.log("visible");
        // Si la pagina se encuentra en primer plano, se actualiza de acuerdo a la logica realizada
        clearInterval(intervalId);
        updatePageTitle();
      }
    };

    // Mensajes cuando no se encuentre visible la pagina (random)
    let intervalId;
    const setComeBackMessage = () => {
      // console.log("started");
      // Limpiar el intervalo existente antes de comenzar uno nuevo
      clearInterval(intervalId);
      const comeBackMessages = [
        "Vuelve guerrer@ 🙀",
        "Aun debes volverte fuerte 💪",
      ];
      // Establecer un nuevo intervalo para cambiar el título cada 4 segundos
      intervalId = setInterval(() => {
        // Seleccionar un mensaje aleatorio
        const index = Math.floor(Math.random() * comeBackMessages.length);
        // Actualizar titulo
        document.title = comeBackMessages[index];
      }, 4000);
    };

    // Si la pagina esta en primer plano
    const updatePageTitle = () => {
      // console.log("Location:", pathname);
      let pageTitle = "NpNg";
      // Busca la ruta en el array de configuración
      const matchedRoute = routesConfig.find(
        (route) => route.path === pathname
      );
      // Verificar si la ruta existe antes de actualizar el título
      if (matchedRoute) {
        pageTitle = `NpNg | ${matchedRoute.title}`;
      }
      // Actualizar el titulo
      document.title = pageTitle;
      // console.log(document.title);
    };

    // Cambiar el título inicial dependiendo la pag
    updatePageTitle();

    // Agregar el listener para el cambio de visibilidad
    document.addEventListener("visibilitychange", handleVisibilityChange);

    // Limpiar el listener y el interval al desmontar el componente
    return () => {
      clearInterval(intervalId);
      document.removeEventListener("visibilitychange", handleVisibilityChange);
    };
  }, [pathname]);

  return <Layout />;
}

function LazyApp() {
  return (
    <Suspense fallback={<Loading />}>
      <App />
    </Suspense>
  );
}

// export default App;
export default LazyApp;
