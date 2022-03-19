import React from 'react';
import './Footer.css';
import Figure from 'react-bootstrap/Figure'
import {Container, Row, Col} from 'react-bootstrap'

function Footer() {
  return <>
      <footer>
          <Container fluid id='contenedor-1'>
            <Row>
              <Col>
                <Container> 
                  <div className='title1'>
                  <p>Podés Escribirnos</p>
                  </div>
                  <div className='box__footer'>
                  <div className='inline' >
                    <Figure>
                     <Figure.Image
                       width={23.89}
                       height={24}
                       alt="whatsapp"
                       src="/iconos/whatsapp.svg"
                     />
                    </Figure>
                    <p>+54 221 36683952</p>
                  </div>
                  <div className='inline' >
                    <Figure>
                     <Figure.Image
                       width={20}
                       height={16}
                       alt="mail"
                       src="/iconos/mail.svg"
                     />
                    </Figure>
                    <p>hola@sodatienda.com.ar</p>
                  </div>
                </div>    
                </Container>
              </Col>
                <Col>
                  <div>
                   <p>Sigamos en contacto</p>
                   <div className='inline' >
                   <Figure>
                     <Figure.Image
                       width={20}
                       height={16}
                       alt="mail"
                       src="/iconos/insta.svg"
                     />
                   </Figure>
                   <Figure>
                     <Figure.Image
                       width={20}
                       height={16}
                       alt="mail"
                       src="/iconos/face.svg"
                     />
                   </Figure>
                   <p>@sodatiendadecosas</p>
                  </div>
                  </div>
                </Col>
            </Row>
          </Container> 
          <Container fluid id='contenedor-2'>       
            <Row>
              <Col>
                <div>
                  <p>Copyright  &copy; Soda tienda de cosas - {new Date().getFullYear()} / Contacto: hola@sodatienda.com.ar</p>
                </div>
              </Col>
              <Col>
                <div>
                  <p>Diseñado con &#129505; por Catagala y codeado por Valenkebat  &#127930;</p>
                </div>               
              </Col>
            </Row>  
          </Container>
      </footer>
  </>;
}

export default Footer;
