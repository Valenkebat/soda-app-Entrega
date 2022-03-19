import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import { CartContext } from "../../context/CartContext";

function CartWidget() {
  const { totalItems } = useContext(CartContext);
  return (
    <>
      <NavLink to={"/carrito"}>
        <img
          src="./Carrito.svg"
          className="d-inline-block align-top"
          alt="Carrito logo"
        />
      </NavLink>
      {totalItems() > 0 ? <p>{totalItems()}</p> : null}
    </>
  );
}
//Acá El widget muestra condicionalmente la cantidad de items agregados al carrito
export default CartWidget;
