import React, { useEffect, useState, useRef } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';

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

function Header() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [showDropdown, setShowDropdown] = useState(false);
  const [language, setLanguage] = useState('en');
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  const handleOutsideClick = (event) => {
    if (
      dropdownRef.current &&
      !dropdownRef.current.contains(event.target) &&
      event.target.id !== 'menu-icon' &&
      event.target.parentElement.id !== 'menu-icon'
    ) {
      setShowDropdown(false);
    }
  };

  useEffect(() => {
    window.addEventListener('click', handleOutsideClick);

    return () => {
      window.removeEventListener('click', handleOutsideClick);
    };
  }, []);

  const changeLanguage = (selectedLanguage) => {
    setLanguage(selectedLanguage);
  };

  const LanguageSelector = () => {
    const handleToggleLanguage = () => {
      const newLanguage = language === 'en' ? 'fr' : 'en';
      changeLanguage(newLanguage);
    };
  
    return (
      <button className="language-button" onClick={handleToggleLanguage}>
        {language === 'en' ? 'FR' : 'EN'}
      </button>
    );
  };

  return (
    <header>
      <section id="home">
        <div className="brand">{translations[language].brand}</div>
      </section>
      <nav>
        {windowWidth > 768 ? (
          <ul>
            <li>
              <a href="#home" className="nav">{translations[language].home}</a>
            </li>
            <li>
              <a href="#articles" className="nav">{translations[language].articles}</a>
            </li>
            <li>
              <a href="#exercises" className="nav">{translations[language].exercises}</a>
            </li>
            <li>
              <a href="#build-workout" className="nav">{translations[language].buildWorkout}</a>
            </li>
            <li>
              <a href="#contact-us" className="nav">{translations[language].contactUs}</a>
            </li>
          </ul>
        ) : (
          <div className="responsive-nav">
            <div
              id="menu-icon"
              className="menu-icon"
              onClick={toggleDropdown}
            >
              {showDropdown ? <FaTimes /> : <FaBars />}
            </div>
            {showDropdown && (
              <ul className="dropdown-menu" ref={dropdownRef}>
                <li>
                  <a href="#home" className="nav">{translations[language].home}</a>
                </li>
                <li>
                  <a href="#articles" className="nav">{translations[language].articles}</a>
                </li>
                <li>
                  <a href="#exercises" className="nav">{translations[language].exercises}</a>
                </li>
                <li>
                  <a href="#build-workout" className="nav">{translations[language].buildWorkout}</a>
                </li>
                <li>
                  <a href="#contact-us" className="nav">{translations[language].contactUs}</a>
                </li>
              </ul>
            )}
          </div>
        )}
        <LanguageSelector />
      </nav>
    </header>
  );
}

export default Header;