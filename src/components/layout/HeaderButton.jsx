import CartContext from "../../store/CartContext";
import { useContext, useState, useEffect } from "react";
import CartIcon from "../cart/CartIcon";
import classes from "./headerbutton.module.css";

const HeaderButton = ({ onShowCart }) => {
  const[bumpisValid ,setBumpisValid]=useState(false);
  const cartCtx = useContext(CartContext);
  const {items} =cartCtx

  const numberOfCartItems = cartCtx.items.reduce((curNumber, item) => {
    return curNumber + item.amount;
  }, 0);

  useEffect(()=>{
    if(items.length === 0 )
    {
      return;
    }
    setBumpisValid(true)

    let timer =setTimeout(()=>{
      setBumpisValid(false)
    },300)

    return ()=>{
      clearTimeout(timer)
    }

  },[items])

  return (
    <>
      <button className={`${classes.button} ${!bumpisValid ? '' : classes.bump} `} onClick={onShowCart}>
        <span className={classes.icon}>
          <CartIcon />
        </span>
        <span>Your Cart</span>
        <span className={classes.badge}>{numberOfCartItems}</span>
      </button>
    </>
  );
};

export default HeaderButton;
