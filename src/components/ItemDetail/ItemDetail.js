import React, { useState,useContext } from "react";
import "./ItemDetail.css";
import ItemCount from "../ItemCount/ItemCount";
import { Container, Row, Col, Modal } from "react-bootstrap";
import { Link } from "react-router-dom";
import { CartContext } from '../../context/CartContext';

const ItemDetail = ({ item }) => {
  const { addItem, isInCart } = useContext(CartContext)
  const [open, setOpen] = useState(true);
  const [lgShow, setLgShow] = useState(false);

  console.log(open);
  console.log(lgShow);

  return (
    <div>
      <div className="contenedor-ItemDetail">
        <Container style={{ margintop: "5%" }}>
          <Row>
            <Col xs={12} md={8}>
              <div className="item-image">
                <Col className="contenedor-miniaturas">
                  <div></div>
                  <div></div>
                  <div></div>
                  <div></div>
                </Col>
              </div>
            </Col>
            <Col xs={12} md={4}>
              <div>
                <Col>
                  <p className="categoria">Categoría Sub-SubCategoría</p>
                  <h2 className="producto">{item.title}</h2>
                  <h2 className="">${item.price}</h2>
                  <div className="contenedor-creador">
                    <div className="img-creador"></div>
                    <p className="nom-creador">{item.creatorName}</p>
                  </div>
                  <p>{item.description}</p>
                  <div>
                    <p>Contenedor Seleccion Propiedades del Producto</p>
                  </div>
                  {open ? (
                    <div>
                      <ItemCount
                        stock={item.stock}
                        initial="1"
                        activeDetails={false}
                        item={item}
                        addItem={addItem}
                      />
                    </div>
                  ) : (
                    <>
                    <div>
                          <Link to="/carrito">Finalizar compra</Link>
                    </div>
                    <Modal
                      size="lg"
                      show={lgShow}
                      onHide={() => setLgShow(false)}
                      aria-labelledby="example-modal-sizes-title-lg"
                    >
                      <Modal.Header>
                        <Modal.Title id="example-modal-sizes-title-lg">
                          Title
                        </Modal.Title>
                      </Modal.Header>
                      <Modal.Body>
                        <div>
                          Total {item.title} : {isInCart(item).quantity}
                        </div>
                        <div>
                          <Link to="/carrito">Finalizar compra</Link>
                        </div>
                        <div>
                          <Link to="/tienda">Seguir Comprando</Link>
                        </div>
                      </Modal.Body>
                    </Modal>
                    
</>
                  )}
                </Col>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default ItemDetail;
