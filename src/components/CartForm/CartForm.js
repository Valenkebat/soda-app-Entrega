import React, { useRef }from 'react'
import { Row, Col, Container } from 'react-bootstrap'
import './CartForm.css'



const CartForm = ({calcularCosto, costoEnvio}) => {
    const reference = useRef({});

  return (
    <div>
        <Container>
            <h5 id="titulo-envio">Calcular Costo de envío</h5>
            <Row> 
                <Col>
                    <input type="text"
                            ref={(el) => (reference.current.codigo_postal = el)}
                            id="codigo_postal"
                    ></input>
                </Col>
                <Col>
                    <button onClick={() => calcularCosto(reference.current.codigo_postal.value)} id="boton_codigo_postal">Calcular</button>
                </Col>
                <Col>
                    {
                        costoEnvio !== 0 ? (
                        <div>
                            total envío {costoEnvio}
                        </div>
                        ):(
                            null
                        )
                    }
                </Col>
            </Row>          
        </Container>
    </div>
  )
}

export default CartForm