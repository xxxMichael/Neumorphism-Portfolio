import React, { useState } from 'react';
import { portfolioData } from '../../data/portfolioData';
import { useAnimations } from '../../hooks/useAnimations';
import Card from '../ui/Card';
import './Projects.css';

const Projects = () => {
  const { elementRef, isVisible } = useAnimations();
  const [activeFilter, setActiveFilter] = useState('Python');
  const { projects } = portfolioData;

  const filters = ['Python', 'Machine Learning', 'NLP'];

  const filteredProjects = projects.filter(project => 
    project.category === activeFilter || activeFilter === 'All'
  );

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
            {/* Proyecto principal (grande) */}
            <div className="projects__featured">
              <Card className="project-card project-card--featured" hover={true}>
                <div className="project-card__image">
                  <img 
                    src="https://i.ibb.co/Km8Bg8X/brain-ai-project.png" 
                    alt="Content Analyzer"
                    className="project-card__img"
                  />
                </div>
                <div className="project-card__content">
                  <h3 className="project-card__title">Content Analyzer</h3>
                  <p className="project-card__description">
                    A robust tool designed for content creators, bloggers, and writers
                  </p>
                  <div className="project-card__footer">
                    <a 
                      href="https://github.com/priti-jadhav/content-analyzer" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="project-card__github"
                      aria-label="View on GitHub"
                    >
                      <span className="github-icon">⚡</span>
                    </a>
                  </div>
                </div>
              </Card>
            </div>

            {/* Proyectos laterales (pequeños) */}
            <div className="projects__sidebar">
              <div className="project-mini">
                <Card className="project-mini__card" hover={true}>
                  <img 
                    src="https://i.ibb.co/dBFpXrd/neural-network.png" 
                    alt="Neural Network Project"
                    className="project-mini__image"
                  />
                </Card>
              </div>
              
              <div className="project-mini">
                <Card className="project-mini__card" hover={true}>
                  <img 
                    src="https://i.ibb.co/ZJ8Kwtd/data-visualization.png" 
                    alt="Data Visualization"
                    className="project-mini__image"
                  />
                </Card>
              </div>
              
              <div className="project-mini">
                <Card className="project-mini__card" hover={true}>
                  <img 
                    src="https://i.ibb.co/JkXM3vW/ml-algorithm.png" 
                    alt="ML Algorithm"
                    className="project-mini__image"
                  />
                </Card>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
