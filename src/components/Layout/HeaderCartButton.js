import styles from "./HeaderCartButton.module.css";
import CartIcon from "../Cart/CartIcon";
import { useContext } from "react";
import CartContext from "../../store/cart-context";
import { useState, useEffect } from "react";

const HeaderCartButton = (props) => {
  const [btnIsHighlighted, setBtnIsHighlighted] = useState(false);  
  const cartCtx = useContext(CartContext);
  useEffect(() => {
    if(cartCtx.items.length === 0) {
      return;
    }
    setBtnIsHighlighted(true);
    const timer = setTimeout(() => {
      setBtnIsHighlighted(false);
    }, 300);
    //this is cleanup function
    return () => {
      clearTimeout(timer);
    }
  }, [cartCtx.items]);
  const btnClasses = `${styles.button} ${btnIsHighlighted && styles.bump}`;
  //const numberOfCartItems = cartCtx.items.length;
  //const numberOfCartItems = cartCtx.items.reduce((curNumber, item) => { return curNumber + item.amount;}, 0);
  const numberOfCartItems = cartCtx.items.reduce((curNumber, item) => {
    //console.log(curNumber + " , " + item.amount);
    return curNumber + item.amount;
  }, 0);
  return (
    <button className={btnClasses} onClick={props.onClick}>
      <span className={styles.icon}>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className={styles.badge}>{numberOfCartItems}</span>
    </button>
  );
};

export default HeaderCartButton;
