import React from 'react';
import { useNavigation } from '../../hooks/useNavigation.js';
import './Navigation.css';

const Navigation = () => {
  const { navigationItems, currentSection, scrollToSection } = useNavigation();

  return (
    <nav className="navigation neumorphism">
      <ul className="navigation__list">
        {navigationItems.map(item => (
          <li key={item.id} className="navigation__item">
            <button
              className={`
                navigation__link 
                ${currentSection === item.id ? 'navigation__link--active' : ''}
              `}
              onClick={() => scrollToSection(item.id)}
              aria-label={`Ir a ${item.label}`}
            >
              {item.label}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navigation;