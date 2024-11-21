/*global onCloseCart */

import React, { useContext } from "react";
import classes from "./cart.module.css";
import Modal from "../UI/Modal";
import CartContext from "../../store/CartContext";
import CartItem from "./CartItem";


const Cart = (props) => {
  const cartCtx = useContext(CartContext);

  const handleRemoveItem =(id)=>{
    cartCtx.removeItem(id)
  }
  const handleAddItem =(item)=>{
    cartCtx.addItem({...item , amount:1})
  }

  let cartItems = cartCtx.items.map((item) => (
    <CartItem
      key={item.id}
      name={item.name}
      price={item.price}
      amount={item.amount}
      onAdd={handleAddItem.bind(null ,item)}
      onRemove={handleRemoveItem.bind(null ,item.id)}
    />
  ));
  // let cartItems = [{ id: "1", name: "sushi", price: 1200 }].map((item) => (
  //   <li>{item.name}</li> ));

  return (
    <Modal onClick={props.onCloseCart}>
      <ul className={classes["cart-items"]}>{cartItems}</ul>

      <div className={classes.total}>
        <span>Total Amount</span>
        <span>{`PKR ${cartCtx.totalPrice}`}</span>
      </div>
      <div className={classes.actions}>
        <button className={classes["button--alt"]} onClick={props.onCloseCart}>
          Close
        </button>
        {(cartItems.length >0 )  && <button className={classes.button}>Order</button>}
        
      </div>
    </Modal>
  );
};

export default Cart;
