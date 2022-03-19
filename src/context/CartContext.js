import React, { createContext, useState } from 'react';

export const CartContext = createContext();

const CartProvider = ({ children }) => {
    const [items, setItems] = useState([]);

    const isInCart = (i) => {
        return items.find(item => item.id === i.id)
    }   
    
    const addItem = (i,n) => {
      const item = {
        id: i.id,
        name: i.title,
        price: i.price,
        quantity: n,
      }
        if (isInCart(item)) {
            isInCart.quantity += n;
        } else {
            items.push(item);
        }
        setItems([...items]);
      };

    const removeItem = (itemId) =>{
        const updatedItems = items.filter(
            (item) => item.id !== itemId
          );
          setItems(updatedItems);
    }

    const clear = () =>{
        setItems([]);
    }
    
    /**Funciones para el calculo de total de la compra y total items y monto toal */
    const motoTotalPorItem = (item) =>{
      return item.quantity * item.price
    }

    const totalItems = () => {
      const sum = items.reduce(function(accumulator, currentItemInArray){
        accumulator = accumulator + currentItemInArray.quantity;
          return accumulator;
      }, 0);
      return sum
    }

    const montoTotal = () => {
      const sum = items.reduce(function(accumulator, currentItemInArray){
        accumulator = accumulator + currentItemInArray.quantity * currentItemInArray.price;
          return accumulator;
      }, 0);
      return sum
    }
  
    return (
        <CartContext.Provider
          value={{
              items,
              isInCart,
              addItem,
              removeItem,
              clear,
              motoTotalPorItem,
              montoTotal,
              totalItems
          }}
        >
          {children}
        </CartContext.Provider>
      );
};

export default CartProvider;