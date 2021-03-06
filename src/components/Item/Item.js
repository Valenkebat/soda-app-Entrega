import React, { useState, useContext } from "react";
import "./Item.css";
import ItemCount from "../ItemCount/ItemCount";
import Collapse from "react-bootstrap/Collapse";
import { CartContext } from "../../context/CartContext";

function Item({ item }) {
  const [open, setOpen] = useState(false);
  const { addItem } = useContext(CartContext);
  // eslint-disable-next-line no-unused-vars

  return (
    <div>
      <div
        className="CardItem"
        style={{
          backgroundImage: `url(${item.img})`,
        }}
      >
        <button onClick={() => setOpen(!open)} className="CardItem-button">
          <svg
            width="59"
            height="59"
            viewBox="0 0 59 59"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle
              cx="29.5"
              cy="29.5"
              r="28.5"
              fill="white"
              stroke="#F41316"
              strokeWidth="2"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M29 27C29.3183 27 29.6235 27.1264 29.8485 27.3515C30.0736 27.5765 30.2 27.8817 30.2 28.2V31.8H33.8C34.1183 31.8 34.4235 31.9264 34.6485 32.1515C34.8736 32.3765 35 32.6817 35 33C35 33.3183 34.8736 33.6235 34.6485 33.8485C34.4235 34.0736 34.1183 34.2 33.8 34.2H30.2V37.8C30.2 38.1183 30.0736 38.4235 29.8485 38.6485C29.6235 38.8736 29.3183 39 29 39C28.6817 39 28.3765 38.8736 28.1515 38.6485C27.9264 38.4235 27.8 38.1183 27.8 37.8V34.2H24.2C23.8817 34.2 23.5765 34.0736 23.3515 33.8485C23.1264 33.6235 23 33.3183 23 33C23 32.6817 23.1264 32.3765 23.3515 32.1515C23.5765 31.9264 23.8817 31.8 24.2 31.8H27.8V28.2C27.8 27.8817 27.9264 27.5765 28.1515 27.3515C28.3765 27.1264 28.6817 27 29 27Z"
              fill="#F41316"
            />
            <path
              d="M29 15C30.3261 15 31.5979 15.5268 32.5355 16.4645C33.4732 17.4021 34 18.6739 34 20V21H24V20C24 18.6739 24.5268 17.4021 25.4645 16.4645C26.4021 15.5268 27.6739 15 29 15ZM36 21V20C36 18.1435 35.2625 16.363 33.9497 15.0503C32.637 13.7375 30.8565 13 29 13C27.1435 13 25.363 13.7375 24.0503 15.0503C22.7375 16.363 22 18.1435 22 20V21H15V41C15 42.0609 15.4214 43.0783 16.1716 43.8284C16.9217 44.5786 17.9391 45 19 45H39C40.0609 45 41.0783 44.5786 41.8284 43.8284C42.5786 43.0783 43 42.0609 43 41V21H36ZM17 23H41V41C41 41.5304 40.7893 42.0391 40.4142 42.4142C40.0391 42.7893 39.5304 43 39 43H19C18.4696 43 17.9609 42.7893 17.5858 42.4142C17.2107 42.0391 17 41.5304 17 41V23Z"
              fill="#F41316"
            />
          </svg>
        </button>
        <Collapse in={open} dimension="height">
          <div id="example-collapse-text">
            <ItemCount
              stock={item.stock}
              initial="1"
              activeDetails={true}
              ruta={item.id}
              item={item}
              addItem={addItem}
            />
          </div>
        </Collapse>
      </div>
      <div className="contenedorInfo">
        <h5>{item.title}</h5>
        <h4>${item.price}</h4>
      </div>
    </div>
  );
}

export default Item;
