import "../styles/_Card.scss";
import Stars from "../components/Stars"
import {BsFillCartPlusFill as Carrito } from "react-icons/bs";

const Card = ({title, price, url, type, isAvailable, onSale, rating}) => {
  return (
    <div className={`card ${isAvailable === false && "no-disponible"}`}>
      <div className="contenedor-img">
        <img src={url} alt="" />
      </div>
      <div className="contenedor-info">
        <h2>
          {title} {onSale === true && <span>ON SALE</span>}
        </h2>
        <p className="type">{type}</p>
        <p className= "contenedor-stars"><Stars rating={rating}/></p>
      </div>
      <p className="precio">$ {price}</p>
      <button>
      <Carrito className="carrito"/>
      </button>
    </div>
  );
};

export default Card;
