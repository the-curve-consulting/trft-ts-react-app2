import { Button, Col, Row } from "react-bootstrap";

export function Buttons() {

  const buttons = [
    "C", "±", "%", "/",
    "7", "8", "9", "x",
    "4", "5", "6", "-",
    "1", "2", "3", "+",
    "0", ".", "="
  ];

  function buttonClicked(val: string) {
    alert(val);
  }

  function generateButtons() {
    return buttons.map((val) => <Col xs={val === "0" ? 6 : 3} className="my-1">
      <Button onClick={() => buttonClicked(val)} block>{val}</Button>
    </Col>);
  }

  return <>
    <Row>
      {generateButtons()}
    </Row>
  </>;
}