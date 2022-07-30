import React, { useState } from "react";
import Header from "./components/Layout/Header";
import Meals from "./components/Meals/Meals";
import Cart from "./components/Cart/Cart";
import CartProvider from "./store/CartProvider";

function App() {
  const [showModalCart, setShowModalCart] = useState(false);
  
  const showModalCartHandler = () => {
    setShowModalCart(true);
  };
  const hideModalCartHandler = () => {
    setShowModalCart(false);
  };
  return (
    <CartProvider>
      { showModalCart && <Cart onHideModal={hideModalCartHandler}/>}
      <Header onShowModal={showModalCartHandler}/>
      <main>
        <Meals />
      </main>
    </CartProvider>
  );
}

export default App;
