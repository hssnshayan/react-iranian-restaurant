import React, { Fragment, useState } from "react";
import Header from "./components/Layout/Header";
import Meals from "./components/Meals/Meals";
import Cart from "./components/Cart/Cart";

function App() {
  const [showModalCart, setShowModalCart] = useState(false);
  
  const showModalCartHandler = () => {
    setShowModalCart(true);
  };
  const hideModalCartHandler = () => {
    setShowModalCart(false);
  };
  return (
    <Fragment>
      { showModalCart && <Cart onHideModal={hideModalCartHandler}/>}
      <Header onShowModal={showModalCartHandler}/>
      <main>
        <Meals />
      </main>
    </Fragment>
  );
}

export default App;
