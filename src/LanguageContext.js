// LanguageContext.js
import React, { createContext, useState, useContext } from 'react';

const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState('en'); // Replace 'en' with the default language

  const translations = {
    en: {
      home: 'HOME',
      articles: 'ARTICLES',
      exercises: 'EXERCISES',
      buildWorkout: 'BUILD WORKOUT',
      contactUs: 'CONTACT US',
      brand: 'GYMBRO',
    },
    fr: {
      home: 'ACCUEIL',
      articles: 'ARTICLES',
      exercises: 'EXERCICES',
      buildWorkout: 'CONSTRUIRE UN PROGRAMME',
      contactUs: 'NOUS CONTACTER',
      brand: 'GYMBRO',
    },
  };
  return (
    <LanguageContext.Provider value={{ language, setLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => useContext(LanguageContext);
