import React, { useState, useEffect } from 'react';
import ItemDetail from '../../components/ItemDetail/ItemDetail';
import Spinner from 'react-bootstrap/Spinner'
import { useParams } from 'react-router';
// Firebase
import {
	collection,
	query,
	where,
	getDocs,
	documentId,
} from 'firebase/firestore';
import { db } from '../../firebase/FirebaseConfig';



const ItemDetailContainer = () => {

  const [itemData, setItemData]=useState([]);
  
  const [loading, setLoading]=useState(true);

  let id = useParams();

  let itemID = id.id;

 
  useEffect(() => {
		const getItemData = async () => {
			const q = query(
				collection(db, 'product'),
				where(documentId(), '==', itemID)
			);
			const docs = [];
			const querySnapshot = await getDocs(q);
			querySnapshot.forEach((doc) => {
				docs.push({ ...doc.data(), id: doc.id });
			});
			setItemData(docs);
		};
		getItemData();
		setTimeout(() => {
			setLoading(false);
		}, 300);
	}, [itemID]);
  
  return (<>
    {
      loading ? (<Spinner  animation="border" />) :(
        itemData.map((data) => {
					return <ItemDetail  item={data} key={data.id}/>;
				})
			
      ) 
      
    }
  </>);
}

export default ItemDetailContainer;
