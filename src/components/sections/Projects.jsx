import React, { useState } from 'react';
import { portfolioData } from '../../data/portfolioData';
import { useAnimations } from '../../hooks/useAnimations';
import Card from '../ui/Card';
import ImageCard from '../ui/ImageCard';
import avatar from '../../assets/Avatar.png';
import './Projects.css';

const Projects = () => {
  const { elementRef, isVisible } = useAnimations();
  const [activeFilter, setActiveFilter] = useState('React');

  const filters = ['PHP', 'Node.js', 'React','Java'];

  return (
    <section id="projects" className="projects" ref={elementRef}>
      <div className="container">
        <div className={`projects__content ${isVisible ? 'fade-in-up' : ''}`}>
          {/* Header */}
          <div className="projects__header">
            <h2 className="projects__title">Projects</h2>
            <div className="projects__gradient-line"></div>
          </div>

          {/* Filtros */}
          <div className="projects__filters">
            {filters.map((filter) => (
              <button
                key={filter}
                className={`projects__filter ${
                  activeFilter === filter ? 'projects__filter--active' : ''
                }`}
                onClick={() => setActiveFilter(filter)}
              >
                {filter}
              </button>
            ))}
          </div>

          {/* Grid de proyectos */}
          <div className="projects__grid">
            {/* Proyectos laterales (pequeños) */}
            <div className="projects__sidebar">
              <div className="project-mini">
                <ImageCard 
                  image="https://i.ibb.co/dBFpXrd/neural-network.png"
                  alt="Neural Network Project"
                  variant="circle"
                />
              </div>
              
              <div className="project-mini">
                <ImageCard 
                  image="https://i.ibb.co/ZJ8Kwtd/data-visualization.png"
                  alt="Data Visualization"
                  variant="circle"
                />
              </div>
              
              <div className="project-mini">
                <ImageCard 
                  image="https://i.ibb.co/JkXM3vW/ml-algorithm.png"
                  alt="ML Algorithm"
                  variant="circle"
                />
              </div>
            </div>

            {/* Proyecto principal (grande) */}
            <div className="projects__featured">
              <div className="project-card project-card--featured">
                <div className="project-card__image">
                  <img 
                    src={avatar} 
                    alt="iBlog"
                    className="project-card__img"
                  />
                </div>
                <div className="project-card__content">
                  <h3 className="project-card__title">iBlog</h3>
                  <p className="project-card__description">
                    iBlog is a web platform that allows users to create, edit, delete, and comment on posts. It includes registration and login options, authentication with Gmail, password recovery, and a responsive design for mobile devices. Developed with React, Vite, and CSS, and deployed on AWS.
                  </p>
                  <div className="project-card__footer">
                    <a 
                      href="https://github.com/xxxMichael/iBlog" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="project-card__github"
                      aria-label="View on GitHub"
                    >
                      <span className="github-icon">⚡</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
