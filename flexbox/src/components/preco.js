import "../styles/preco.scss";

import React from "react";
export default () => {
  return (
    <section className="preco" id="preco">
      <div className="preco-item">
        <h2>Cobre</h2>
        <span>
          <sup>R$</sup>19
        </span>
        <ul>
          <li>Planos Ilimitados</li>
          <li>Acesso Restrito</li>
          <li>Conteudo Secreto</li>
          <li>Suporte 24h</li>
        </ul>
        <a href="#">Comprar</a>
      </div>
      <div className="preco-item">
        <h2>Prata</h2>
        <span>
          <sup>R$</sup>19
        </span>
        <ul>
          <li>Planos Ilimitados</li>
          <li>Acesso Restrito</li>
          <li>Conteudo Secreto</li>
          <li>Suporte 24h</li>
          <li>Compra Exclusiva</li>
        </ul>
        <a href="#">Comprar</a>
      </div>
      <div className="preco-item">
        <h2>Ouro</h2>
        <span>
          <sup>R$</sup>19
        </span>
        <ul>
          <li>Planos Ilimitados</li>
          <li>Acesso Restrito</li>
          <li>Conteudo Secreto</li>
          <li>Suporte 24h</li>
          <li>Compra Exclusiva</li>
          <li>Download dos Itens</li>
        </ul>
        <a href="#">Comprar</a>
      </div>
    </section>
  );
};
