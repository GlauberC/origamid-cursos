import React from "react";
import "../styles/sobre.scss";
import sobre1 from "../assets/sobre1.jpg";
import sobre2 from "../assets/sobre2.jpg";
export default () => {
  return (
    <section className="sobre" id="sobre">
      <div className="sobre-info">
        <h1>Sobre</h1>
        <p>
          Neste sentido, o novo modelo estrutural aqui preconizado talvez venha
          a ressaltar a relatividade do levantamento das variáveis envolvidas.
        </p>
        <p>
          Neste sentido, o novo modelo estrutural aqui preconizado talvez venha
          a ressaltar a relatividade do levantamento das variáveis envolvidas.
        </p>
      </div>
      <div className="sobre-img">
        <img src={sobre1} alt="Sobre 1" />
      </div>
      <div className="sobre-img">
        <img src={sobre2} alt="Sobre 2" />
      </div>
    </section>
  );
};
