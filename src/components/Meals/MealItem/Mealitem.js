import React, {useContext} from "react";
import MealItemForm from "./MealItemForm";
import CartContext from "../../../store/cart.context";

import styles from './mealItem.module.css'

const Mealitem = ({ id, name, description, price}) => {
  const formattedPrice = `$${price.toFixed(2)}`;
  const cartCtx = useContext(CartContext);

  const addToCartHandler = (amount)=>{
      cartCtx.addItem({
        id: id,
        name: name,
        price: price,
        amount: amount  
      })
  }
  return (
    <li className={styles.meal}>
      <div>
        <h3>{name}</h3>
        <div className={styles.description}>{description}</div>
        <div className={styles.price}>{formattedPrice}</div>
      </div>
      <div>
         <MealItemForm onAddToCart={addToCartHandler}/>
      </div>
    </li>
  );
};

export default Mealitem;
