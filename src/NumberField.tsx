import { Col, Row } from "react-bootstrap";

export function NumberField({ value }: { value: string; }) {
  return <Row>
    <Col xs={12} style={{
      background: "#000",
      color: "#fff",
      fontSize: "2em",
      textAlign: "right"
    }}>{value || <div>&nbsp;</div>}</Col>
  </Row>;
}