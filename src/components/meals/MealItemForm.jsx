import React, { useState, useRef ,useEffect } from "react";
import classes from "./mealitemform.module.css";
import MealInput from "../UI/MealInput";

const MealItemForm = ({ id ,onAddToCart}) => {
  const [isAmountValid, setIsAmountValid] = useState(true)
  const amountInputRef = useRef();
  let value=1;

    
  const handleAddButton = (event) => {
    event.preventDefault();
    const entered= amountInputRef.current.value;
    const enteredAmount=+entered
    if(entered.trim().length===0 || enteredAmount<1 || enteredAmount >5)
    {
      setIsAmountValid(false)
      
      
      return;
    }
    else{
      onAddToCart(enteredAmount)
      setIsAmountValid(true)
      
    }
    
  };
  

  return (
    <form className={classes.form} onSubmit={handleAddButton}>
      <MealInput
        ref={amountInputRef}
        label="Amount"
        input={{
          id: "Amount_" + id,
          type: "number",
          min: '1',
          max: "5",
          step: "1",
          defaultValue: 1,
        }}
      />
      <button onClick={handleAddButton}>+ ADD</button>
      {!isAmountValid && <p>please enter valid amount (1-5).</p>}
      
    </form>
  );
};

export default MealItemForm;
