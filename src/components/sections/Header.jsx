import React, { useState, useEffect } from "react";
import { useNavigation } from "../../hooks/useNavigation";
import "./Header.css";

const Header = () => {
  const { navigationItems, currentSection, scrollToSection } = useNavigation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <div className="header__container">
      {/* Logo */}

      {/* Navigation Desktop */}
      <nav className="header__nav">
        <ul className="nav__list">
          {navigationItems.map((item) => (
            <li key={item.id} className="nav__item">
              <button
                className={`nav__link ${
                  currentSection === item.id ? "nav__link--active" : ""
                }`}
                onClick={() => scrollToSection(item.id)}
              >
                {item.label}
              </button>
            </li>
          ))}
        </ul>
      </nav>

      {/* Mobile Menu Button */}
      <button
        className="header__mobile-toggle neumorphism"
        onClick={toggleMobileMenu}
        aria-label="Toggle mobile menu"
      >
        <span></span>
        <span></span>
        <span></span>
      </button>

      {/* Mobile Navigation */}
      <div
        className={`header__mobile-nav ${
          isMobileMenuOpen ? "header__mobile-nav--open" : ""
        }`}
      >
        <nav className="mobile-nav neumorphism">
          <ul className="mobile-nav__list">
            {navigationItems.map((item) => (
              <li key={item.id} className="mobile-nav__item">
                <button
                  className={`mobile-nav__link ${
                    currentSection === item.id ? "mobile-nav__link--active" : ""
                  }`}
                  onClick={() => {
                    scrollToSection(item.id);
                    setIsMobileMenuOpen(false);
                  }}
                >
                  {item.label}
                </button>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Header;
