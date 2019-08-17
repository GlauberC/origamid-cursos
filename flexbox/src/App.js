import React from "react";
import "./styles/reset.css";
import "./styles/app.scss";
import Sobre from "./components/sobre";
import Header from "./components/header";
import Produtos from "./components/produtos";
import Preco from "./components/preco";
import Qualidade from "./components/qualidade";
import Newsletter from "./components/newsletter";
import Footer from "./components/footer";

function App() {
  return (
    <div>
      <div className="superinfo-bg">
        <div className="superinfo">
          <p>Seg / Sex - 08:00 às 18:00</p>
          <a href="tel:+55219999999">+55 21 9999-9999</a>
          <p>Av. Ali Perto, 330, Natal - RN</p>
        </div>
      </div>
      <Header />
      <main>
        <h1 className="introducao">
          Novos valores e <br /> Propriedades de CSS
        </h1>
        <Sobre />
        <Produtos />
        <Preco />
        <Qualidade />
        <Newsletter />
        <Footer />
      </main>
    </div>
  );
}

export default App;
