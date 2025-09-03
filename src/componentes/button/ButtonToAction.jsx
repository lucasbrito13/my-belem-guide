//importação de icone
import ArrowIcon from '../../assets/imagens/icons8-direita-50.svg?react';
import { Link } from "react-router-dom";
import "./ButtonToAction.css"; 

export default function ButtonToAction({ children }) {
  return (
    <Link to="/categorias" className="hero-btn">
      <button className="hero-btn-categouries">
        {children}
        <ArrowIcon className="icon" />
      </button>
    </Link>
  );
}
