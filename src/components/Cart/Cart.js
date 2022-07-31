import React, { useContext } from "react";
import Modal from "../UI/Modal";
import CartItem from "./CartItem";
import CartContext from "../../store/cart.context";

import styles from "./Cart.module.css";

const Cart = ({ onHideModal }) => {
  const cartCtx = useContext(CartContext);
  const isCartHasItem = cartCtx.items.length > 0 ? true : false;

  const removeItemFromCartHandler = (id) => {
    cartCtx.removeItem(id)
  };
  const addItemToCartHandler = (item) => {
    cartCtx.addItem({ ...item, amount: 1 });
  };
  const cartItems = (
    <ul className={styles["cart-items"]}>
      {cartCtx.items.map((item) => (
        <CartItem
          key={item.id}
          name={item.name}
          amount={item.amount}
          price={item.price}
          onAdd={addItemToCartHandler.bind(null, item)}
          onRemove={removeItemFromCartHandler.bind(null, item.id)}
        />
      ))}
    </ul>
  );
  return (
    <Modal onClose={onHideModal}>
      {cartItems}
      <div className={styles.total}>
        <span>Total Amount</span>
        <span>{`$${cartCtx.totalAmount.toFixed(2)}`}</span>
      </div>
      <div className={styles.actions}>
        <button className={styles["button--alt"]} onClick={onHideModal}>
          Close
        </button>
        {isCartHasItem && (
          <button className={styles["button--alt"]}>Order</button>
        )}
      </div>
    </Modal>
  );
};

export default Cart;
