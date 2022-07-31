import React, { useContext, useEffect, useState } from "react";
import CartContext from "../../store/cart.context";
import CartIcon from "../Cart/CartIcon";
import styles from "./HeaderCartButton.module.css";

const HeaderCartButton = ({ onClick }) => {
  const cartCtx = useContext(CartContext);
  const { items } = cartCtx;
  const [cartBtnEffect, setCartBtnEffect] = useState(false);

  const numberOfCartItems = items.reduce((currentNumber, item) => {
    return currentNumber + item.amount;
  }, 0);

  const cartHeaderBottonClasses = `${styles.button} ${
    cartBtnEffect ? styles.bump : ""
  }`;

  useEffect(() => {
    if (items.legth === 0) {
      return;
    }
    setCartBtnEffect(true);
    const timer = setTimeout(() => {
      setCartBtnEffect(false);
    }, 300);

    return () => {
      clearTimeout(timer);
    };
  }, [items]);

  return (
    <button className={cartHeaderBottonClasses} onClick={onClick}>
      <span className={styles.icon}>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className={styles.badge}>{numberOfCartItems}</span>
    </button>
  );
};

export default HeaderCartButton;
