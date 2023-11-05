import React from "react";
import { useTranslation } from "react-i18next";

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();

  const handleLanguageChange = (e) => {
    const newLang = e.target.value;
    localStorage.setItem("language", newLang);
    i18n.changeLanguage(newLang);
  };

  return (
    <select value={i18n.language} onChange={handleLanguageChange} className="cursor-pointer max-desktop:text-[14px] bg-white">
      <option value="am">ՀԱՅ</option>
      <option value="en">ENG</option>
      <option value="ru">РУС</option>
    </select>
  );
};

export default LanguageSwitcher;
