import React from 'react';
import { Container, Row, Col, Card, Badge, ListGroup } from 'react-bootstrap';
import '../App.css'

function SingleRecipe() {
//   const { categoryName, categoryDescription, categoryImg, categoryLink } = props;
  return (
   <Container fluid='md'>
    <Row>
      <Col sm={2}>

      </Col>
        <Col sm={8}>
            <Card>
              <Card.Img variant="top" src="https://source.unsplash.com/8FWUFPbLjOQ/1100x600" />
                <Card.Body>
                  <Card.Title>Nalewka miętowa</Card.Title>
                    <Card.Text>
                      Nalewka jest orzeźwiająca, ma wspaniały smak i zapach oraz kolor. Oprócz walorów smakowych, nalewka korzystnie wpływa na układ trawienny.
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
                    <Row>
                    <Col sm={6}>
                    <h5 className='mt-2 mb-4 ml-4'>Składniki</h5>
                        <Container className='container-gray ml-2'>
                            <ListGroup  variant="flush">
                                <ListGroup.Item className='container-gray'>500 ml spirytusu</ListGroup.Item>
                                <ListGroup.Item className='container-gray'>10 dużych łodyg mięty z ogródka (mięty z marketu - dwie doniczki)</ListGroup.Item>
                                <ListGroup.Item className='container-gray'>300 g cukru</ListGroup.Item>
                                <ListGroup.Item className='container-gray'>600 ml wody </ListGroup.Item>
                            </ListGroup>
                        </Container>
                    </Col>
                    <Col sm={6}>
                    <h5 className='mt-2 ml-4'>Przygotowanie</h5>
                        <Card.Body>
                            <Card.Text>
                            Całe łodygi mięty myjemy, osuszamy, wkładamy do słoika i zalewamy spirytusem.
                            Po 24 godzinach wyciągamy łodygi (mają być sztywne, jakby „suche”).
                            W gorącej wodzie rozpuszczamy cukier i po ostygnięciu wlewamy do spirytusu. Mieszamy i przelewamy do butelki. Szczelnie zamykamy i zostawiamy w ciemnym miejscu na 2 -3 dni. Nalewka nie wymaga dojrzewania, można ją degustować od razu, choć najlepiej odstawić ją na pół roku by dojrzała.
                            </Card.Text>
                        </Card.Body>
                    </Col>
                    </Row>
            </Card>
        </Col>
      <Col sm={2}>

      </Col>
    </Row>
  </Container>      

    
  );
}

export default SingleRecipe;