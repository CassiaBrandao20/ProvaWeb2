import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Home from './pages/home/Home';
import CadastroCategoria from './pages/CadastroCategoria/CadastroCategoria';
import CadastroProduto from './pages/CadastroProduto/CadastroProduto';
import ListarProdutos from './pages/ListarProdutos/ListarProdutos';
import ListarCategorias from './pages/ListarCategoria/ListarCategoria';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/CadastroCategoria" element={<CadastroCategoria />} />
        <Route path="/CadastroProduto" element={<CadastroProduto />} />
        <Route path="/listarCategoria" element={<ListarCategorias />} />
        <Route path="/listarProduto" element={<ListarProdutos />} />
      </Routes>
    </Router>
  );
};

export default App;
