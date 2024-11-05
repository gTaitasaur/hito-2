const CardPizza = ({ name, price, ingredients, img }) => (
    <div className="card">
      <img src={img} alt={`Pizza ${name}`} />
      <h3>{name}</h3>
      <p>Precio: ${price.toLocaleString()}</p>
      <p>Ingredientes: {ingredients.join(', ')}</p>
      <button>Ver más</button>
      <button>Añadir</button>
    </div>
  );
  
  export default CardPizza;
  