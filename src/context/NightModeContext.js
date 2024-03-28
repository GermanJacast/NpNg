import React, { createContext, useContext, useState } from "react";

const NightModeContext = createContext();

export const useNightMode = () => {
  return useContext(NightModeContext);
};

export const NightModeProvider = ({ children }) => {
  const [nightMode, setNightMode] = useState(false);

  //   Alternar modo nocturno
  const toggleNightMode = () => {
    setNightMode(!nightMode);
  };

  return (
    <NightModeContext.Provider value={{ nightMode, toggleNightMode }}>
      {children}
    </NightModeContext.Provider>
  );
};
