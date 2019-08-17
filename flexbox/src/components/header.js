import React from "react";
import "../styles/header.scss";

export default () => {
  return (
    <header className="menu-bg">
      <div className="menu">
        <div className="menu-logo">
          <a href="#">Flexblog</a>
        </div>
        <nav>
          <ul>
            <li>
              <a href="#sobre">Sobre</a>
              <a href="#produtos">Produtos</a>
              <a href="#preco">Preço</a>
              <a href="#qualidade">Qualidade</a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};
