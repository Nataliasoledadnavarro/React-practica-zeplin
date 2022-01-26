import "../styles/_Card.scss";

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
        <p>stars: {rating}</p>
      </div>
      <p className="precio">$ {price}</p>
      <button>
        <img
          src="https://www.seekpng.com/png/small/986-9868123_png-file-icono-carrito-de-compras.png"
          alt="icono carrito compra"
        />
      </button>
    </div>
  );
};

export default Card;
