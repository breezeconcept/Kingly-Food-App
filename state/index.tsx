'use client';

import { CartAction, CartState } from '@/app/types';
import React, {
  createContext,
  useContext,
  useReducer,
  ReactNode,
  useEffect,
} from 'react';

const CART_STORAGE_KEY = 'cartKingly';

const initialCartState: CartState = {
  items: [],
};

const CartContext = createContext<{
  state: CartState;
  dispatch: React.Dispatch<CartAction>;
}>({
  state: initialCartState,
  dispatch: () => null,
});

const cartReducer = (state: CartState, action: CartAction): CartState => {
  switch (action.type) {
    case 'ADD_TO_CART':
      const existingItem = state.items.find(
        (item) => item.id === action.payload.id
      );
      if (existingItem) {
        return state;
      } else {
        const updatedItems = [...state.items, action.payload];
        localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(updatedItems));
        return {
          ...state,
          items: updatedItems,
        };
      }

    case 'REMOVE_FROM_CART':
      const updatedItems = state.items.filter(
        (item) => item.id !== action.payload
      );
      localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(updatedItems));
      return {
        ...state,
        items: updatedItems,
      };
    default:
      return state;
  }
};

export const useCart = () => {
  return useContext(CartContext);
};

export const CartProvider = ({ children }: { children: ReactNode }) => {
  const [state, dispatch] = useReducer(cartReducer, initialCartState);

  useEffect(() => {
    const storedCartItems = localStorage.getItem(CART_STORAGE_KEY);
    if (storedCartItems) {
      dispatch({ type: 'LOAD_CART', payload: JSON.parse(storedCartItems) });
    }
  }, []);

  return (
    <CartContext.Provider value={{ state, dispatch }}>
      {children}
    </CartContext.Provider>
  );
};
