import React from 'react';
import ListRecipes from './listRecipes'
import MonthSearch from './MonthSearch'
import { Container, Row, Col } from 'react-bootstrap'

function nalewkiContainer() {
//   const { categoryName, categoryDescription, categoryImg, categoryLink } = props;
  return (
    <Container>
      <Row>
        <Col sm={9}>
          <ListRecipes/>
        </Col>
        <Col sm ={3}>
          <MonthSearch/>
        </Col>
      </Row>
    </Container>
     
     
   
    
  );
}

export default nalewkiContainer;