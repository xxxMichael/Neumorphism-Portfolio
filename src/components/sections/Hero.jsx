import React from 'react';
import { portfolioData } from '../../data/portfolioData';
import { SOCIAL_LINKS } from '../../constants/portfolio';
import { useTypewriter } from '../../hooks/useAnimations';
import { useNavigation } from '../../hooks/useNavigation';
import { iconService } from '../../services/IconService';
import Card from '../ui/Card';
import './Hero.css';

const Hero = () => {
  const { personal } = portfolioData;
  const { displayText } = useTypewriter('Machine Learning Engineer', 150);
  const { scrollToSection } = useNavigation();

  const handleLearnMore = () => {
    scrollToSection('about');
  };

  const handleContactMe = () => {
    scrollToSection('contact');
  };

  return (
    <section id="hero" className="hero hero--dark">
      <div className="container">
        <div className="hero__content">
          {/* Avatar circular con ilustración */}
          <div className="hero__avatar-section">
            <div className="hero__avatar-container neumorphism-dark">
              <img 
                src="https://i.ibb.co/9GVzVN1/programmer-illustration.png" 
                alt="Priti Jadhav - Machine Learning Engineer"
                className="hero__avatar-illustration"
              />
            </div>
          </div>

          {/* Contenido de texto */}
          <div className="hero__text-section">
            <div className="hero__greeting">Hey</div>
            
            <h1 className="hero__name">
              I'm <span className="text-gradient">Priti Jadhav</span>
            </h1>
            
            <h2 className="hero__title">
              Machine Learning <span className="hero__title-accent">Engineer</span>
            </h2>
            
            <p className="hero__description">
              A highly motivated student studying Artificial Intelligence and 
              Machine Learning. Actively seeking opportunities to apply my 
              skills and knowledge to real-world projects and contribute to the 
              advancement of the industry.
            </p>
            
            <div className="hero__actions">
              <button 
                className="hero__btn hero__btn--primary neumorphism-button-dark"
                onClick={handleLearnMore}
              >
                Learn More
              </button>
              
              <button 
                className="hero__btn hero__btn--secondary neumorphism-button-dark"
                onClick={handleContactMe}
              >
                Contact me
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;