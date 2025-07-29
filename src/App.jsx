import React from "react";
import Header from "./components/sections/Header";
import Hero from "./components/sections/Hero";
import About from "./components/sections/About";
import Projects from "./components/sections/Projects";
import Skills from "./components/sections/Skills";
import Certifications from "./components/sections/Certifications";
import FontAwesomeParticles from "./components/particles/FontAwesomeParticles";
// import Experience from './components/sections/Experience';
// import Contact from './components/sections/Contact';
import "./App.css";
import "./styles/neumorphism.css";

function App() {
  return (
    <div className="App">
      {/* Partículas en el fondo de toda la aplicación */}
      <FontAwesomeParticles />
      
      <Header />
      <div className="main-content neumorphic-main-container">
        <Hero />
        <About />
        <Projects />
        <Skills />
        <Certifications />
        {/* <Experience />
        <Contact /> */}
      </div>
    </div>
  );
}

export default App;
