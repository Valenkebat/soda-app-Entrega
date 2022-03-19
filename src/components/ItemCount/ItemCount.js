import React, { useState } from "react";
import "./ItemCount.css";
import { Link } from "react-router-dom";
import { Modal, Button } from "react-bootstrap"


function ItemCount({ stock, initial, activeDetails, ruta, item, addItem }) {
  const [counter, setCounter] = useState(parseInt(initial));
  const [disabled, setDisabled] = useState(false);
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  

  const handlerCounterUp = () => {
    if (counter < parseInt(stock)) {
      setCounter(counter + 1);
      if (disabled === true) {
        setDisabled(!disabled);
      }
    }
  };

  const handlerCounterDown = () => {
    if (counter > 0) {
      setCounter(counter - 1);
    } else {
      setDisabled(!disabled);
    }
  };

  return (
    <div>
      <div className="containerCount">
        <div className="contenedor-Buttons">
          <button onClick={handlerCounterDown}>
            <svg
              width="26"
              height="26"
              viewBox="0 0 26 26"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M18.0259 13.1611H13.1614H8.29688"
                stroke="#75CFDB"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M13.1613 25.3227C19.8778 25.3227 25.3227 19.8778 25.3227 13.1613C25.3227 6.44481 19.8778 1 13.1613 1C6.44481 1 1 6.44481 1 13.1613C1 19.8778 6.44481 25.3227 13.1613 25.3227Z"
                stroke="#75CFDB"
                strokeLinejoin="round"
              />
            </svg>
          </button>
          <div className="displayCant">
            <p>{counter}</p>
          </div>
          <button onClick={handlerCounterUp}>
            <svg
              width="27"
              height="26"
              viewBox="0 0 27 26"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M13.5089 13.1614H8.50537M13.5089 8.29688V13.1614V8.29688ZM13.5089 13.1614V18.0259V13.1614ZM13.5089 13.1614H18.5124H13.5089Z"
                stroke="#75CFDB"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M13.5088 25.3227C20.4172 25.3227 26.0176 19.8778 26.0176 13.1613C26.0176 6.44481 20.4172 1 13.5088 1C6.60038 1 1 6.44481 1 13.1613C1 19.8778 6.60038 25.3227 13.5088 25.3227Z"
                stroke="#75CFDB"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </div>

        <div className="contenedor-agregar-al-carrito">
          <button
            onClick={() => {
              addItem(item, counter);
              handleShow()
            }}
            disabled={disabled}
          >
            Agregar al Carrito
          </button>
        </div>
        {activeDetails ? (
          <div className="contenedor-agregar-al-carrito">
            <Link to={`/detalle/${ruta}`} className="Link">
              Ver mas detalles
            </Link>
          </div>
        ) : null}
      </div>
      
      <Modal
        show={show}
        onHide={handleClose}
      >
        <Modal.Header closeButton>
          <Modal.Title>Agregar al Carrito</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        Se agregaron {counter} {item.title} al Carrito
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Seguir Comprando
          </Button>
          <Link to={`/Carrito`} className="Link">
              Terminar compra
          </Link>
          
        </Modal.Footer>
      </Modal>
    </div>
  );
}


/**Este modal indica que agregaste un Item al carrito y da la opcion de ir al carrito a pagar o seguir comprando  */
export default ItemCount;
