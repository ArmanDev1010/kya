import React, { useEffect, useState } from "react";

import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import { translationAM, translationEN, translationRU } from "./languages";

import { About, CoursePage, Home } from "./components";
import { Route, Routes } from "react-router-dom";

import { useLocation } from "react-router-dom";
import { MyContext } from "./context/MyContext";

const resources = {
  am: {
    translation: translationAM,
  },
  en: {
    translation: translationEN,
  },
  ru: {
    translation: translationRU,
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: localStorage.getItem("language"),
  fallbackLng: "am",
  interpolation: {
    escapeValue: false,
  },
});

const App = () => {
  const [is_MenuActive, setIs_MenuActive] = useState(false);
  const { state } = useLocation();
  const { targetId } = state || {};

  const el = document.getElementById(targetId);

  useEffect(() => {
    if (el) {
      el.scrollIntoView({ block: "center" }, { behavior: "smooth" });
    }
  }, [el]);

  const [isDesktop, setIsDesktop] = useState(window.innerWidth);

  useEffect(() => {
    window.addEventListener("resize", () => setIsDesktop(window.innerWidth));
  }, [window.innerWidth]);

  return (
    <div className="font-montserrat">
      <MyContext.Provider
        value={{ is_MenuActive, setIs_MenuActive, isDesktop }}
      >
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/courses">
            <Route path="business" element={<CoursePage course="business" />} />
            <Route path="rights" element={<CoursePage course="rights" />} />
            <Route
              path="self_knowledge"
              element={<CoursePage course="self_knowledge" />}
            />
          </Route>
          <Route path="/about" element={<About />} />
        </Routes>
      </MyContext.Provider>
    </div>
  );
};

export default App;
