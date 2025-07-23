import React from 'react';
import { portfolioData } from '../../data/portfolioData';
import { useAnimations } from '../../hooks/useAnimations';
import Card from '../ui/Card';
import './Certifications.css';

const Certifications = () => {
  const { elementRef, isVisible } = useAnimations();
  const { certifications } = portfolioData;

  return (
    <section id="certifications" className="certifications" ref={elementRef}>
      <div className="container">
        <div className={`certifications__content ${isVisible ? 'fade-in-up' : ''}`}>
          {/* Header */}
          <div className="certifications__header">
            <h2 className="certifications__title">Certifications</h2>
            <div className="certifications__gradient-line"></div>
          </div>

          {/* Contenedor de certificaciones */}
          <div className="certifications__container">
            <Card className="certifications__showcase" hover={false}>
              <div className="certifications__grid">
                {certifications.map((cert, index) => (
                  <div 
                    key={cert.id} 
                    className={`certification-item ${index === 1 ? 'certification-item--featured' : ''}`}
                  >
                    <Card className="certification-card" hover={true}>
                      <div className="certification-card__content">
                        <div className="certification-card__header">
                          <img 
                            src={cert.image || 'https://i.ibb.co/8jT3QmR/certificate-placeholder.png'} 
                            alt={cert.title}
                            className="certification-card__image"
                          />
                        </div>
                        <div className="certification-card__info">
                          <h3 className="certification-card__title">{cert.title}</h3>
                          <p className="certification-card__issuer">{cert.issuer}</p>
                          <span className="certification-card__date">{cert.date}</span>
                          {cert.credentialId && (
                            <p className="certification-card__credential">
                              ID: {cert.credentialId}
                            </p>
                          )}
                        </div>
                      </div>
                    </Card>
                  </div>
                ))}
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Certifications;
