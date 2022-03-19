import React, { useContext, useState } from "react";
import { CartContext } from "../context/CartContext";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import { CartItemList } from "../components/CartItemList/CartItemList";
import CartForm from "../components/CartForm/CartForm";
import { Link } from "react-router-dom";

// FIRBASE - FIRESTORE
import {
  collection,
  addDoc,
  doc,
  Timestamp,
  updateDoc,
  increment
} from "firebase/firestore";
import { db } from '../firebase/FirebaseConfig'


const initialBuyer = {
  name: '',
  email: '',
  phone: ''

}

const initialState = {
  buyer: initialBuyer,
  items: [],
  date: Timestamp.fromDate(new Date()),
  total: 0,
};



export const Carrito = () => {
  const[ name, setName] = useState(initialBuyer.name);
  const[ email, setEmail] = useState(initialBuyer.email);
  const[ phone, setPhone] = useState(initialBuyer.phone);

  const [values, setValues] = useState(initialState);
  const { items, montoTotal, clear, totalItems } = useContext(CartContext);
  const [costoEnvio, setCostoEnvio] = useState(0);
  

  const calcularCosto = (codigoPostal) => {
    if (codigoPostal.trim() === "") {
      console.log("Manejo de error");
    } else {
      setCostoEnvio(codigoPostal);
    }
  };


  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(values)
    const ordersRef = collection(db, 'orders')
    const newOrder = {
      buyer: {
        name: name,
        email: email,
        phone: phone
      
      },
      items: items,
      total: montoTotal()
    }
    console.log("Compra Terminada")

    addDoc(ordersRef, newOrder);

    items.forEach((element) => {
      console.log(element.name, "  asdsad ",element.quantity)
      const elementRef = doc(db, "product", element.id);
      updateDoc(elementRef, { stock: increment(element.quantity * -1) });
    });
    setValues(initialState)
    clear()
  }

  return (
    <div style={{
      marginTop: "2vh"
    }}>
      <Container>
        <Container>
          {items.length !== 0 ? (
            <Container>
              <Row>
                <Col>
                  <p>Producto</p>
                </Col>
                <Col>
                  <p>Precio U</p>
                </Col>
                <Col>
                  <p>#</p>
                </Col>
                <Col>
                  <p> Total </p>
                </Col>
                <Col></Col>
              </Row>
              <CartItemList items={items} />
              <Container>
                <Row>
                  <Col>
                    <p> Total A Abonar ${montoTotal()} </p>
                  </Col>
                  <Col>
                    <p> Total Items{totalItems()} </p>
                  </Col>
                </Row>
              </Container>
            </Container>
          ) : (
            <Row>
              <p>Carrito vacio</p>
              <div>
                <Link to="/tienda">Seguir Comprando</Link>
              </div>
            </Row>
          )}
        </Container>
        <CartForm calcularCosto={calcularCosto} costoEnvio={costoEnvio} />

        {items.length !== 0 ? (
          <Container>
            <Form onSubmit={e => { handleSubmit(e) }}>
              <Form.Group className="mb-3" controlId="nombre">
                <Form.Label>Nombre</Form.Label>
                <Form.Control type="text" placeholder="Ingrese Nombre" name='name'
                  value={name} onChange={e => setName(e.target.value)}
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="mail">
                <Form.Label>e-mail</Form.Label>
                <Form.Control type="text" placeholder="Ingrese mail" name='email'
                  value={email} onChange={e => setEmail(e.target.value)}
                   />
              </Form.Group>
              <Form.Group className="mb-3" controlId="tel">
                <Form.Label>Telefono</Form.Label>
                <Form.Control type="text" placeholder="Ingrese telefono" name='phone'
                  value={phone} onChange={e => setPhone(e.target.value)}
                />
              </Form.Group>
              <Button variant="primary" type="submit">
                Terminar Compra
              </Button>
            </Form>
          </Container>
        ) : null}
      </Container>
    </div >
  );
}

export default Carrito