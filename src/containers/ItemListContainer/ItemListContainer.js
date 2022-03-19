import React, { useState, useEffect } from "react";
import { useParams } from "react-router";
import ItemList from "../../components/ItemList/ItemList";

import "./ItemListContainer.css";
import { Container } from "react-bootstrap";

// FIRBASE - FIRESTORE
import {
  collection,
  query,
  getDocs,
  where,
} from "firebase/firestore";
import { db } from "../../firebase/FirebaseConfig";

function ItemListContainer() {
  const [productsData, setProductsData] = useState([]);

  const productRef = collection(db, "product");

  const { category } = useParams();
  console.log(category);

  useEffect(() => {
    const getProducts = async () => {
      if (category === 'tienda') {
        const q = query(productRef);
        const docs = [];
        const querySnapshot = await getDocs(q);
        querySnapshot.forEach((doc) => {
          docs.push({ ...doc.data(), id: doc.id });
        });
        console.log(docs);
        setProductsData(docs);
      } else {
        const q = query(productRef, where("category", "==", category));
        const docs = [];
        const querySnapshot = await getDocs(q);
        querySnapshot.forEach((doc) => {
          docs.push({ ...doc.data(), id: doc.id });
        });

        setProductsData(docs);
      }
    };
    getProducts();
  }, [category]);

  return (
    <div>
      <Container>
        <ItemList items={productsData} />
      </Container>
    </div>
  );
}

export default ItemListContainer;
