import Card from "../components/Card";
import Filtros from "../components/Filtros.js";
import "../styles/_Section.scss";

const Section = (props) => {
  console.log(props);
  const cards = props.array.map((producto) => {
    return (
      <Card
        title={producto.title}
        type={producto.type}
        price={producto.price}
        url={producto.img}
        isAvailable={producto.isAvailable}
        onSale={producto.onSale}
        rating={producto.rating}
      />
    );
  });

  return (
    <section>
      <Filtros />
      {cards}
    </section>
  );
};

export default Section;
