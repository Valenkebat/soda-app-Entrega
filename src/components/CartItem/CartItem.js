import React, { useContext } from "react";
import { Col } from "react-bootstrap";
import { CartContext } from "../../context/CartContext";

export const CartItem = ({ item }) => {
  const { removeItem, motoTotalPorItem } = useContext(CartContext);


  return (
    <>
      <Col>
        <p>{item.name}</p>
      </Col>
      <Col>
        <p>${item.price}</p>
      </Col>
      <Col>
        <p>{item.quantity}</p>
      </Col>
      <Col>
        <p>${motoTotalPorItem(item)}</p>
      </Col>
      <Col>
        <button onClick={() => removeItem(item.id)}>Eliminar</button>
      </Col>
    </>
  );
};
