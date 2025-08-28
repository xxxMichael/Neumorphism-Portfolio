import React from "react";
import { portfolioData } from "../../data/portfolioData";
import { useAnimations } from "../../hooks/useAnimations";
import ImageCard from "../ui/ImageCard";
import "./About.css";
import Avatar from "../../assets/Profile.jpg";
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
              <ImageCard image={Avatar} />
            </div>

            {/* Contenido de texto */}
            <div className="about__text-section">
              <h2 className="about__title">About me</h2>

              <div className="about__description">
                <p>
                  My name is Michael Chavez, I'm 20 and a fourth-semester
                  software engineering student based in Tungurahua, Ecuador. I
                  have a strong passion for web development, data structures,
                  front-end design, and technologies like Three.js.
                </p>

                <p>
                  Outside of my regular activities, I enjoy reading, combat
                  sports, video games, movies, and indulging in delicious
                  chinese cuisine.
                </p>
                <p>
                  I'm continuously thrilled to collaborate with my classmates
                  and teams to develop meaningful projects. Your visit to my
                  portfolio is deeply appreciated!
                </p>
              </div>

              {/* Stats o métricas */}
              <div className="about__stats">
                <div className="about__stat">
                  <span className="about__stat-number">50+</span>
                  <span className="about__stat-label">Projects Completed</span>
                </div>
                <div className="about__stat">
                  <span className="about__stat-number">3</span>
                  <span className="about__stat-label">Years Experience</span>
                </div>
                <div className="about__stat">
                  <span className="about__stat-number">15</span>
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
