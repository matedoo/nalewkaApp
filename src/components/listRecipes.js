import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col, Card, Button, Badge } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function ListRecipes() {
//   const { categoryName, categoryDescription, categoryImg, categoryLink } = props;
  return (

    <Container>
      <h5>
        <i></i>
        Lista przepisów
      </h5>
      <Row>
        <Col>
          <Card>
            <Card.Img variant="top" src="https://source.unsplash.com/8FWUFPbLjOQ/1600x1600" />
            <Card.Body>
              <Link to={'/mietowa'}><Card.Title>Nalewka miętowa</Card.Title></Link>
              <Card.Text>
                Some quick example text to build on the card title and make up the bulk of
                the card's content.
              </Card.Text>
              <Badge pill variant="light">
                  Spirytus
                </Badge>{' '}
                <Badge pill variant="light">
                  Cukier
                </Badge>{' '}
                <Badge pill variant="light">
                  Mięta
                </Badge>{' '}
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card>
            <Card.Img variant="top" src="https://source.unsplash.com/KNn9hjPdv34/1600x1600" />
            <Card.Body>
              <Card.Title>Nalewka cytrynowa</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up the bulk of
                the card's content.
              </Card.Text>
              <Badge pill variant="light">
                  Cytryny
                </Badge>{' '}
                <Badge pill variant="light">
                  Cukier
                </Badge>{' '}
                <Badge pill variant="light">
                  Mięta
                </Badge>{' '}
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card>
            <Card.Img variant="top" src="https://source.unsplash.com/T3D2lLg33Bo/1600x1600" />
            <Card.Body>
              <Card.Title>Nalewka pomarańczowa</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up the bulk of
                the card's content.
              </Card.Text>
                <Badge pill variant="light">
                  Pomarańcze
                </Badge>{' '}
                <Badge pill variant="light">
                  Cukier
                </Badge>{' '}
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <Row className='mt-4'>
        <Col>
          <Button variant="outline-info">Pokaż więcej</Button>
        </Col>
      </Row>
    </Container>
    

   
    
  );
}

export default ListRecipes;