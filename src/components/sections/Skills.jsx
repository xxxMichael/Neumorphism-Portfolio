import React, { useState } from 'react';
import { portfolioData } from '../../data/portfolioData';
import { useAnimations } from '../../hooks/useAnimations';
import Card from '../ui/Card';
import './Skills.css';

const Skills = () => {
  const { elementRef, isVisible } = useAnimations();
  const [activeCategory, setActiveCategory] = useState('Languages');
  const { skills } = portfolioData;

  const categories = ['Languages', 'Frameworks', 'Tools'];

  const getSkillsForCategory = (category) => {
    switch(category) {
      case 'Languages':
        return skills.languages || [];
      case 'Frameworks':
        return skills.frameworks || [];
      case 'Tools':
        return skills.tools || [];
      default:
        return [];
    }
  };

  return (
    <section id="skills" className="skills" ref={elementRef}>
      <div className="container">
        <div className={`skills__content ${isVisible ? 'fade-in-up' : ''}`}>
          {/* Header */}
          <div className="skills__header">
            <h2 className="skills__title">Skills</h2>
            <div className="skills__gradient-line"></div>
          </div>

          {/* Filtros de categorías */}
          <div className="skills__filters">
            {categories.map((category) => (
              <button
                key={category}
                className={`skills__filter ${
                  activeCategory === category ? 'skills__filter--active' : ''
                }`}
                onClick={() => setActiveCategory(category)}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Contenedor principal con ilustración central */}
          <div className="skills__container">
            {/* Ilustración central */}
            <div className="skills__center">
              <Card className="skills__illustration-card" hover={false}>
                <img 
                  src="https://i.ibb.co/JnP4VGz/isometric-coding.png" 
                  alt="Programming Illustration"
                  className="skills__illustration"
                />
              </Card>
            </div>

            {/* Navegación lateral */}
            <div className="skills__navigation">
              <button 
                className="skills__nav-btn skills__nav-btn--prev"
                onClick={() => {
                  const currentIndex = categories.indexOf(activeCategory);
                  const prevIndex = currentIndex > 0 ? currentIndex - 1 : categories.length - 1;
                  setActiveCategory(categories[prevIndex]);
                }}
              >
                ◀
              </button>
              
              <button 
                className="skills__nav-btn skills__nav-btn--next"
                onClick={() => {
                  const currentIndex = categories.indexOf(activeCategory);
                  const nextIndex = currentIndex < categories.length - 1 ? currentIndex + 1 : 0;
                  setActiveCategory(categories[nextIndex]);
                }}
              >
                ▶
              </button>
            </div>
          </div>

          {/* Lista de habilidades */}
          <div className="skills__list">
            <div className="skills__grid">
              {getSkillsForCategory(activeCategory).map((skill, index) => (
                <Card key={skill.name} className="skill-card" hover={true}>
                  <div className="skill-card__content">
                    <div className="skill-card__icon">
                      <span>{skill.icon}</span>
                    </div>
                    <h3 className="skill-card__name">{skill.name}</h3>
                    <div className="skill-card__level">
                      <div className="skill-level-bar">
                        <div 
                          className="skill-level-fill"
                          style={{ width: `${skill.level}%` }}
                        ></div>
                      </div>
                      <span className="skill-level-text">{skill.level}%</span>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
