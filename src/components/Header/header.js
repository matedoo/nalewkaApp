import React from 'react';
import { Button, Navbar, Nav, Form, FormControl } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';


function HeaderApp() {
  return (
      <Navbar bg="light" expand="lg" className='mb-5'>
        <Navbar.Brand as={Link} to='/'>Domowe-Alkohole</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            <Nav.Link as={Link} to='/'>Home</Nav.Link>
            <Nav.Link as={Link} to='/login'>Zaloguj</Nav.Link>
            <Nav.Link as={Link} to='/register'>Zarejestruj</Nav.Link>
            <Nav.Link as={Link} to='/'>Kontakt</Nav.Link>
          </Nav>
          <Form inline>
            <FormControl type="text" placeholder="Search" className="mr-sm-2" />
            <Button variant="outline-success">Search</Button>
          </Form>
          <Button className='ml-1' variant="success">Dodaj przepis</Button>
        </Navbar.Collapse>
      </Navbar>
  );
}

export default HeaderApp;