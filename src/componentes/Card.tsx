import * as React from "react"
const Card = () => {
  return (
    <div className="card">
      <div className="product-image" id="img-1"></div>
        {" "}
        <div className="num1-cima">
            <span className="n1-cima">1</span>
        </div>
        <h3 className="h3-cima">DESENVOLVEDOR WEB SÊNIOR</h3>
      <h1 className="numero1"></h1>
      <p className="cidade-cima">SINOP-MT</p>
      <p className="experiencia-cima">
        Esperiência e conhecimentos JavaScript, AJAX, HTML5, CCS3, PHP, Banco de
        dados, PGSQL e REST/JSON, para desenvolvimento de aplicações web
      </p>
      <p className="ver-mais-cima">Ver mais...</p>
    </div>
  );
};
export default Card;
