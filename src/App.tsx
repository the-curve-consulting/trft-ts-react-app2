import React from 'react';
import './App.css';
import Container from 'react-bootstrap/Container';
import { Navigation } from './Navigation';
import { Calculator } from './Calculator';

function App() {
  return (
    <>
      <Container fluid>
        <Navigation />
      </Container>
      <Container>
        <Calculator />
      </Container>
    </>
  );
}

export default App;
