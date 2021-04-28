import React from 'react';
import './App.css';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import { Navigation } from './Navigation';

function App() {
  return (
    <>
      <Container fluid>
        <Navigation />
      </Container>
      <Container>
        <Button>Click Me</Button>
      </Container>
    </>
  );
}

export default App;
