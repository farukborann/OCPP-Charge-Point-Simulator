import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Main from "./Components/Main/Main";
import MenuBar from "./Components/MenuBar/MenuBar";
import Settings from "./Components/Settings/Settings";
import defaultSettings from "./Config/default-settings";
import SettingsContext from "./Context/SettingsContext";

function App() {
  const [settingsState, setSettingsState] = useState(
    JSON.parse(localStorage.getItem("OCPPSettings")) || defaultSettings
  );

  return (
    <SettingsContext.Provider value={{ settingsState, setSettingsState }}>
      <BrowserRouter>
        <MenuBar />
        <Routes>
          <Route exact path="/" element={<Main />} />
          <Route exact path="/settings" element={<Settings />} />
        </Routes>
      </BrowserRouter>
    </SettingsContext.Provider>
  );
}

export default App;
