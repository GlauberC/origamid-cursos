import React from "react";
import "../styles/newsletter.scss";

export default () => {
  return (
    <section className="newsletter">
      <div className="newsletter-container">
        <div className="newsletter-info">
          <h1>Newsletter</h1>
          <p>assine e fique por dentro das novidades</p>
        </div>
        <form className="newsletter-form">
          <input type="text" placeholder="Seu e-mail" />
          <button type="submit">Assinar</button>
        </form>
      </div>
    </section>
  );
};
