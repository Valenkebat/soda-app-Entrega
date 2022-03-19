import Item from '../Item/Item';
import  Row from 'react-bootstrap/Row';
import  Col from 'react-bootstrap/Col';

const ItemList = ({items}) => {


return (<div>
      <Row>
        {
          items.map((item, index)=>(
        
            <Col key={index}>
              <Item key={index} item={item}></Item>
            </Col>
            ))        
        }
      </Row>
  </div>
)
}

export default ItemList;
