import React from "react";
import classes from "./listmeal.module.css";
import MealItemForm from "./MealItemForm";
import CartContext from "../../store/CartContext";
import { useContext } from "react";

const ListMeal = ({ name, price, description, id }) => {
  const cartCtx = useContext(CartContext);

  const handleCartAmount = (enteredAmount) => {
    cartCtx.addItem({
      name: name,
      price: price,
      id: id,
      amount: enteredAmount,
    });
  };

  let mealprice = `${price} PKR`;

  return (
    <li className={classes.meal}>
      <div>
        <h3>{name}</h3>
        <div className={classes.description}>{description}</div>
        <div className={classes.price}>{mealprice}</div>
      </div>
      <div>
        <MealItemForm id={id} key={id} onAddToCart={handleCartAmount} />
      </div>
    </li>
  );
};

export default ListMeal;
