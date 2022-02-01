import "../styles/_Card.scss";
import Stars from "../components/Stars"
import Modal from "../components/Modal"
import {BsFillCartPlusFill as Carrito } from "react-icons/bs";
import { useState } from "react";

const Card = ({title, price, url, type, isAvailable, onSale, rating}) => {

const [cambiarPosition, setCambiarPosition]=useState(false);
const [mostrarCarrito, setMostrarCarrito] = useState(false);

const handleMouseEnter = () =>{
  setCambiarPosition(true)
}

const handleMouseLeave = () =>{
  setCambiarPosition(false)
}

const handleClickCarrito = () =>{
  setMostrarCarrito(true)
}

const handleClickCerrar = () =>{
  setMostrarCarrito(false)
}


  return (
    <div className={`card ${isAvailable === false && "no-disponible"} ${cambiarPosition && "position"}`} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
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
      <button onClick={handleClickCarrito}>
      <Carrito className="carrito"/>
      </button>
      {mostrarCarrito && <Modal titulo={title} precio={price} onClick={handleClickCerrar}/>}
    </div>
  );
};

export default Card;
