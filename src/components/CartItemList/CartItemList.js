import React from "react";
import { Row } from "react-bootstrap";
import { CartItem } from "../CartItem/CartItem";

export const CartItemList = ({ items }) => {
  return (
    <div>
      {items.map((item, index) => {
        return (
          <Row key={index}>
            <CartItem item={item} />
          </Row>
        );
      })}
    </div>
  );
};


