import React from 'react';
import './home.css';

//icones
import { FaFacebookF, FaInstagram, FaTwitter } from 'react-icons/fa';

// paginas reutilizadas
import listaCategorias from '../categories/listaCategorias.jsx';

// componentes
import ButtonToAction from '../../componentes/button/ButtonToAction.jsx';
import CategoryCard from '../../componentes/CategoryCard/Categorycard.jsx';

const Home = () => {
  return (
    <>
      {/* Conteudo do Banner "Hero Image" */}
      <section className="hero-image">
        <div className="hero-text">
          <h1>Descubra o Coração da Amazônia</h1>
          <h3>
            Seu guia essencial para Belém, Brasil, explorando sua rica cultura,
            natureza vibrante e experiências inesquecíveis.
          </h3>
          <ButtonToAction>Explore agora</ButtonToAction>
        </div>
      </section>

      <section className="bagged">
        <div className="bagged-text">
          <h1>Explore as maravilhas de Belém</h1>
          <p>
            Descubra o coração vibrante da Amazônia por meio de nossas
            categorias selecionadas.
          </p>
        </div>

        {/* Cards de categorias, usando uma lista de array criada dentro da pasta "page", pois o conteudo será utilizado dentro da pagina categorias  */}
        <div className="grid">
          {listaCategorias.slice(0, 4).map((categoria, index) => (
            <CategoryCard
              key={index}
              index={index}
              icon={categoria.icon}
              title={categoria.title}
              description={categoria.description}
              to={categoria.to}
            />
          ))}
        </div>

        <div className="bagged-text">
          <h1>Destinos turísticos mais visitados em Belém</h1>
          <p>
            Não deixe de visitar os pontos mais emblemáticos e populares da
            cidade.
          </p>
        </div>
      </section>
      <section className="call-to-action">
        <div className="call-to-action-text">
          <h1>Pronto para planejar sua aventura?</h1>
          <p>
            O MyBelémGuide é o seu companheiro perfeito para descobrir as
            maravilhas de Belém. Comece a explorar agora mesmo!
          </p>
          <ButtonToAction>Acessar agora</ButtonToAction>
        </div>
      </section>
      <footer>
        <h1>MyBelémGuide</h1>
        <p>© 2025 MyBelémGuide – Projeto de estudo</p>
        <div className="footerIcon">
          <a
            href="https://www.facebook.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaFacebookF />
          </a>
          <a
            href="https://www.instagram.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagram />
          </a>
          <a
            href="https://www.twitter.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaTwitter />
          </a>
        </div>
      </footer>
    </>
  );
};

export default Home;
