import React from 'react';
import { Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';


function CardApp(props) {
  const { categoryName, categoryDescription, categoryImg, categoryLink } = props;
  return (
     <Card style={{ width: '15rem' }}>
        <Card.Img variant="top" src={categoryImg} />
        <Card.Body>
            <Card.Title>{categoryName}</Card.Title>
            <Card.Text>
            {categoryDescription}
            </Card.Text>
        </Card.Body>
        <Card.Body>
        <Link to={categoryLink}><Button>Przejdź</Button></Link>
        
        </Card.Body>
     </Card>
  );
}

export default CardApp;