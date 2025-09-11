import React from 'react';
import "./categorias.css";
import listaCategorias from '../categories/listaCategorias.jsx';
import MySelect from './selectoption.jsx';


const Categorias = () => {
  
  return (
    <>
      {/* Conteudo do Banner */}
      <section className="banner-back">
        <div className="banner-text">
          <h1>Descubra por categoria</h1>
          <h3>Explore Belém de acordo com seus interesses</h3>
        </div>

          <MySelect
            placeholder="Selecione uma categoria..."
            options={listaCategorias.map((c) => ({
              value: c.to,
              label: c.title,
          }))} />

      </section>
    </>
  );
};

export default Categorias;
