import React from "react";
import "./about.scss";

import picture from "./foto.jpeg";

const About = () => {
  return (
    <div className="container">
      <div className="about">
        <h2>Nicolás Buitrago Rodríguez</h2>
        <div className="about__me">
          <p className="about__me__description">
            Soy ingeniero mecatrónico y especialista en automatización de
            procesos industriales, me apasiona el desarrollo tanto de
            aplicaciones como de páginas web, me gustan los videojuegos y la
            tecnología. mi enfoque en el desarrollo es tanto para el frontend
            como el backend con una proyección a ser un desarrollador senior
            fullstack.
          </p>

          <img
            src={picture}
            alt="Presentación Nicolás"
            className="about__me__photo"
          />
        </div>
        <div className="about__like">
          <h2>
            3 Cosas que mas me han gustado de lo que he prendido en Make it real
          </h2>

          <ol className="listabout">
            <li>Manejo de react por componentes</li>
            <li>Uso de preprocesadores como sass</li>
            <li>consumo de API</li>
          </ol>
        </div>
        <div className="about__contact">
          <p className="about__contact__mail">nicbuirod@hotmail.com</p>
          <a href="https://github.com/nicbuirod">
            https://github.com/nicbuirod
          </a>
        </div>
      </div>
    </div>
  );
};

export default About;
