import React from "react";
import MealItemForm from "./MealItemForm";

import styles from './mealItem.module.css'

const Mealitem = ({ name, description, price }) => {
  const formattedPrice = `$${price.toFixed(2)}`;
  return (
    <li className={styles.meal}>
      <div>
        <h3>{name}</h3>
        <div className={styles.description}>{description}</div>
        <div className={styles.price}>{formattedPrice}</div>
      </div>
      <div>
         <MealItemForm />
      </div>
    </li>
  );
};

export default Mealitem;
