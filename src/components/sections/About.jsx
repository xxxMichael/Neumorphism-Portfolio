import React from "react";
import { portfolioData } from "../../data/portfolioData";
import { useAnimations } from "../../hooks/useAnimations";
import Card from "../ui/Card";
import "./About.css";

const About = () => {
  const { elementRef, isVisible } = useAnimations();
  const { personal } = portfolioData;

  return (
    <section id="about" className="about" ref={elementRef}>
      <div className="container">
        <div className={`about__content ${isVisible ? "fade-in-up" : ""}`}>
          <div className="about__grid">
            {/* Avatar con ilustración futurista */}
            <div className="about__image-section">
              <Card className="about__avatar-card" variant="dark" hover={false}>
                <img src=" " alt="" className="about__avatar-illustration" />
              </Card>
            </div>

            {/* Contenido de texto */}
            <div className="about__text-section">
              <h2 className="about__title">About me</h2>

              <div className="about__description">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
                  non imperdiet lorem. Nulla luctus quam sit amet mauris
                  fringilla dictum. Donec vestibulum quam sed orci suscipit,
                  posuere aliquam nibh interdum. Aenean tincidunt sagittis
                  cursus. Maecenas at aliquam ipsum, quis cursus nunc.
                </p>

                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
                  non imperdiet lorem. Nulla luctus quam sit amet mauris
                </p>
              </div>

              {/* Stats o métricas */}
              <div className="about__stats">
                <div className="about__stat">
                  <span className="about__stat-number">50+</span>
                  <span className="about__stat-label">Projects Completed</span>
                </div>
                <div className="about__stat">
                  <span className="about__stat-number">3+</span>
                  <span className="about__stat-label">Years Experience</span>
                </div>
                <div className="about__stat">
                  <span className="about__stat-number">15+</span>
                  <span className="about__stat-label">Technologies</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
