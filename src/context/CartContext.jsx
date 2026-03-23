import React, { createContext, useReducer } from "react";

export const CartContext = createContext();

const initialState = {
  cart: []
};

function reducer(state, action) {
  switch (action.type) {
    case "ADD_ITEM":
      return { ...state, cart: [...state.cart, action.payload] };
    default:
      return state;
  }
}

export const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <CartContext.Provider value={{ state, dispatch }}>
      {children}
    </CartContext.Provider>
  );
};