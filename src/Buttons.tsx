import { Button, Col, Row } from "react-bootstrap";

export function Buttons() {

  const buttons = [
    "C", "+-", "%", "/",
    "7", "8", "9", "x",
    "4", "5", "6", "-",
    "1", "2", "3", "+",
    "0", ".", "="
  ]

  function generateButtons() {
    return buttons.map((val) => <Col xs={3}>
      <Button>{val}</Button>
    </Col>);
  }

  return <>
    <Row>    
      { generateButtons() }
    </Row>
  </>;
}