import React from "react";

import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import { translationAM, translationEN, translationRU } from "./languages";

import { CoursePage, Home } from "./components";
import { Route, Routes } from "react-router-dom";

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
  return (
    <div className="font-montserrat">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/courses">
          <Route path="business" element={<CoursePage course="business" />} />
          <Route path="rights" element={<CoursePage course="rights" />} />
        </Route>
      </Routes>
    </div>
  );
};

export default App;
