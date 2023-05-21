import Header from "./components/Layout/Header";
import Meals from "./components/Meals/Meals";
import Cart from "./components/Cart/Cart";
import { useState } from "react";

function App() {
  const [cariIsShow, setCariIsShow] = useState(false);

  const showCartHandler = () => {
    setCariIsShow(true);
  }

  const hideCartHandler = () => {
    setCariIsShow(false);
  }

  return (
    <>
      {cariIsShow && <Cart onClose={hideCartHandler} />}
      <Header onShowCart={showCartHandler} />
      <main>
        <Meals />
      </main>
    </>
  );
}

export default App;
