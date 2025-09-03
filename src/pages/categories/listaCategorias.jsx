import GastronomyIcon from "../../assets/imagens/talheres-gastronomia.svg?react";
import NatureIcon from "../../assets/imagens/folha-natureza.svg?react";
import CultureIcon from "../../assets/imagens/culture.svg?react";
import ShoppingIcon from "../../assets/imagens/shopping.svg?react";


const listaCategorias  = [
  {
    icon: <GastronomyIcon />,
    title: "Gastonomia",
    description: "Delicie seu paladar com a culinária amazônica única.",
    to: "../pages/categories/gastonomia",
    image: "",
  },
  {
    icon: <NatureIcon />,
    title: "Natureza",
    description: "Mergulhe na exuberância da Amazônia que pulsa no coração de Belém.",
    to: "../pages/categories/natureza",
    image: ""
  },
  {
    icon: <CultureIcon />,
    title: "Cultura",
    description: "Descubra a vibrante história, arte e tradições de Belém.",
    to: "../pages/categories/cultura",
    image: ""
  },
  {
    icon: <ShoppingIcon />,
    title: "Shopping",
    description: "Dos mercados vibrantes aos shoppings elegantes, Belém oferece um mundo de compras para todos os gostos.",
    to: "../pages/categories/shopping",
    image: ""
  },
];

export default listaCategorias;