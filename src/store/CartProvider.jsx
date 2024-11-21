import React, { useReducer } from "react";
import CartContext from "./CartContext";

const initialCartState = {
  items: [],

  totalPrice: 0,
};
const cartReducer = (state, { type, payload }) => {
  
  if (type === "ADD") {
    const updatedTotal = state.totalPrice + payload.price * payload.amount;

    const existingCartItemIndex = state.items.findIndex(
      (singleItem) => singleItem.id === payload.id
    );
    const existingCartItem = state.items[existingCartItemIndex];
    let updatedItem;
    let updatedItems;
    if (existingCartItem) {
      updatedItem = {
        ...existingCartItem,
        amount: existingCartItem.amount + payload.amount,
      };
      updatedItems = [...state.items];
      updatedItems[existingCartItemIndex] = updatedItem;
    } else {
      updatedItems = state.items.concat(payload);
    }

    return {
      items: updatedItems,
      totalPrice: updatedTotal,
    };
  }
  if (type === "REMOVE") {
    const existingItemIndex = state.items.findIndex(
      (singleItem) => singleItem.id === payload
    );
    
    const existingItem = state.items[existingItemIndex];
    
    const updatedTotal = state.totalPrice - existingItem.price;
    let updatedItems;
    if (existingItem.amount === 1) {
      updatedItems = state.items.filter((singleItem) => singleItem.id !== payload);
      
    }
    else{
     const  updatedItem={...existingItem , amount: existingItem.amount -1};
     updatedItems=[...state.items];
      updatedItems[existingItemIndex]= updatedItem
    }
    return {
      items:updatedItems,
      totalPrice:updatedTotal
    }
  }
  return initialCartState;
};

const CartProvider = (props) => {
  const [cartState, dispathCartState] = useReducer(
    cartReducer,
    initialCartState
  );

  const handleAddItemCart = (item) => {
    dispathCartState({ type: "ADD", payload:item });
  };

  const handleRemoveItemCart = (id) => {
    dispathCartState({ type: "REMOVE", payload: id});
  };

  const cartContext = {
    items: cartState.items,
    totalPrice: cartState.totalPrice,
    addItem: handleAddItemCart,
    removeItem: handleRemoveItemCart,
  };

  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;
