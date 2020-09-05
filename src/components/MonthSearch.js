import React from 'react';
import { Container, ListGroup } from 'react-bootstrap'

function MonthSearch() {
//   const { categoryName, categoryDescription, categoryImg, categoryLink } = props;
  return (
    <Container>
      <h5>Nalewki na danych miesiąc</h5>
      <ListGroup variant="flush">
        <ListGroup.Item>Całoroczne</ListGroup.Item>
        <ListGroup.Item>Styczeń</ListGroup.Item>
        <ListGroup.Item>Luty</ListGroup.Item>
        <ListGroup.Item>Marzec</ListGroup.Item>
        <ListGroup.Item>Kwiecień</ListGroup.Item>
        <ListGroup.Item>Maj</ListGroup.Item>
        <ListGroup.Item>Czerwiec</ListGroup.Item>
        <ListGroup.Item>Lipiec</ListGroup.Item>
        <ListGroup.Item>Sierpień</ListGroup.Item>
        <ListGroup.Item>Wrzesień</ListGroup.Item>
        <ListGroup.Item>Październik</ListGroup.Item>
        <ListGroup.Item>Listopad</ListGroup.Item>
        <ListGroup.Item>Grudzień</ListGroup.Item>
      </ListGroup>  
    </Container>
  );
}

export default MonthSearch;