import React from "react";
import Modal from "../UI/Modal";

import styles from "./Cart.module.css";

const Cart = ({onHideModal}) => {
  const cartItems = (
    <ul className={styles['cart-items']}>
      {[{ id: "c1", name: "Sushi", amount: 2, price: 12.98 }].map((item) => (
        <li key={item.id}>{item.name}</li>
      ))}
    </ul>
  );
  return (
    <Modal onClose={onHideModal}>
      {cartItems}
      <div className={styles.total}>
        <span>Total Amount</span>
        <span>35.89</span>
      </div>
      <div className={styles.actions}>
        <button className={styles['button--alt']} onClick={onHideModal}>Close</button>
        <button className={styles['button--alt']}>Order</button>
      </div>
    </Modal>
  );
};

export default Cart;
