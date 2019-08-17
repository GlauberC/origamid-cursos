import React from "react";
import "../styles/produtos.scss";

import produtos1 from "../assets/produtos1.jpg";
import produtos2 from "../assets/produtos2.jpg";
import produtos3 from "../assets/produtos3.jpg";

export default () => {
  return (
    <section className="produtos" id="produtos">
      <h1>Produtos</h1>
      <div className="produtos-container">
        <div className="produtos-item">
          <h2>Purple</h2>
          <img src={produtos1} alt="Produtos 1" />
        </div>
        <div className="produtos-item">
          <h2>Pink</h2>
          <img src={produtos2} alt="Produtos 2" />
        </div>
        <div className="produtos-item">
          <h2>Blue</h2>
          <img src={produtos3} alt="Produtos 3" />
        </div>
      </div>
    </section>
  );
};
