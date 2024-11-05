import CardPizza from './CardPizza';
import './Home.css'

const Home = () => (
  <div className='PizzaDiv'>
    <div className="PizzaCard">
      <CardPizza
        name="Napolitana"
        price={5950}
        ingredients={["mozzarella", "tomates", "jamón", "orégano"]}
        img="src/assets/imgs/pzz1.jpg"
      />
    </div>
    <div className="PizzaCard">
      <CardPizza
        name="Española"
        price={6950}
        ingredients={["mozzarella", "gorgonzola", "parmesano", "provolone"]}
        img="src/assets/imgs/pzz1.jpg"
      />
    </div>
    <div className="PizzaCard">
      <CardPizza
        name="Pepperoni"
        price={6950}
        ingredients={["mozzarella", "pepperoni", "orégano"]}
        img="src/assets/imgs/pzz1.jpg"
        
      />
    </div>
  </div>
);

export default Home;
