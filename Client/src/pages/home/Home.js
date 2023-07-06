import React from "react";
import { Link } from "react-router-dom";
import './Home.css';

const Home = () => {
  return (
    <div className="containerHome">
      <div className="menu">
        <div className="logo">
          <Link>CATALOGO</Link>
        </div>
        <ul>
        <li>
            <Link to="/CadastroProduto">PRODUTO</Link>
          </li>
        <li>
            <Link to="/CadastroCategoria">CATEGORIA</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Home;

