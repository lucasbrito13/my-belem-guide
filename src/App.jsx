import React from "react";
import { Routes, Route } from "react-router-dom";
import GlobalStyle from "./styles/GlobalStyle";

// Páginas
import Home from "./pages/Home/Home";
import Categories from "./pages/categories/Categorias";
import About from "./pages/About/About";
import Contact from "./pages/Contact/Contact";

// Componentes
import Header from "./componentes/Header/Header";

function App() {
  return (
    <>
      <GlobalStyle />
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/categories" element={<Categories />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </>
  );
}

export default App;
