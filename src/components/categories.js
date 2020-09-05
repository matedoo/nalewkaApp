import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import CardApp from './card'
// import App from '../App'
// import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
// import beerContainer from './beerContainer'
// import wineContainer from './wineContainer'
// import nalewkiContainer from './nalewkiContainer'



function CategoriesContainer() {
  
  return (    
     <Container>
        <Row>
       
          <Col>
            <CardApp 
             categoryName={'Piwowarstwo'}
             categoryDescription={'Przepisy na domowe piwa, poradniki, dyskusje'} 
             categoryImg={"https://source.unsplash.com/2uSnxq3M4GE/1600x1600"}
             categoryLink={'/beerContainer'}
             />
          </Col>
          <Col>
            <CardApp
             categoryName={'Winiarstwo'}
             categoryDescription={'Przepisy na domowe wina, poradniki, dyskusje'}
             categoryImg={"https://source.unsplash.com/sHTwDYKti6Q/1600x1600"}
             categoryLink={'/wineContainer'}
            />
          </Col>
          <Col>
            <CardApp
             categoryName={'Nalewki'} 
             categoryDescription={'Przepisy na domowe nalewki, poradniki, dyskusje'}
             categoryImg={"https://source.unsplash.com/owveVPyDWFo/1600x1600"}
             categoryLink={'/nalewkiContainer'}    
            />
          </Col>
              
        </Row>
      </Container>


  );
}

export default CategoriesContainer;

