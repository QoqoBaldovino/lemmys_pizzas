import styles from "../styles/PizzaList.module.css";
import PizzaCard from "./PizzaCard"

const PizzaList = ({pizzaList}) => {
  return (
    <div id = "pizzas" className={styles.container}>
      <h1 className={styles.title}>NUESTRAS PIZZAS</h1>
      <div className={styles.wrapper}>
        {pizzaList.map((pizza) => (
          <PizzaCard key = {pizza._id} pizza = {pizza} />
        ))}
      </div>
    </div>
  );
};

export default PizzaList;