import React from 'react';
import { Container, Col, Row, Button, Form } from 'react-bootstrap';

function Register() {
  return (
    <Container>
     <Row md={3} className='justify-content-center'>
      <Col>
        <Form >
        <Form.Group controlId="formBasicLogin">
            <Form.Label>Login</Form.Label>
            <Form.Control type="login" placeholder="Wpisz login" />
          </Form.Group>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Adres e-mail</Form.Label>
            <Form.Control type="email" placeholder="Wpisz email" />
          </Form.Group>
          <Form.Group controlId="formBasicPassword">
            <Form.Label>Hasło</Form.Label>
            <Form.Control type="password" placeholder="Wpisz hasło" />
          </Form.Group>
          <Button variant="primary" type="submit">
            Zarejestruj
          </Button>
          <p>Dodać logowanie przez facebook</p>
        </Form>
      </Col>
    </Row>      
  </Container>
  );
}

export default Register;