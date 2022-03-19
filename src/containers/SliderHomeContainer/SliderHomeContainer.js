import React, { useState, useEffect } from "react";
import Slider from "../../components/Slider/Slider";
import { Row, Col, Container} from 'react-bootstrap'

// FIRBASE - FIRESTORE
import { collection, query, getDocs } from 'firebase/firestore';
import { db } from '../../firebase/FirebaseConfig';

const SliderHomeContainer = () => {
  	const [productsData, setProductsData] = useState([]);
	const [isLoading, setIsLoading] = useState(true);

	useEffect(() => {
		const getProducts = async () => {
			const q = query(collection(db, 'product'));
			const docs = [];
			const querySnapshot = await getDocs(q);
			// console.log('DATA:', querySnapshot);
			querySnapshot.forEach((doc) => {
				// console.log('DATA:', doc.data(), 'ID:', doc.id);
				docs.push({ ...doc.data(), id: doc.id });
			});
			// console.log(docs);
			setProductsData(docs);
		};
		getProducts();
		setTimeout(() => {
			setIsLoading(false);
		}, 1000);
	}, []);

  return (
    <Row>
      <Col xs={6} md={4}>
        <Container>
          <div>
            <h1>Ofertas</h1>
            <h2>de la semana</h2>
            <p>Ver todas</p>
          </div>     
        </Container>   
      </Col>
      <Col xs={12} md={8}>
        <Slider products={productsData} loading={isLoading} />
      </Col>
    </Row>
  );
};

export default SliderHomeContainer;
