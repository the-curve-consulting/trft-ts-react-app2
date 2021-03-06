import { Col, Row } from "react-bootstrap";

export function NumberField({ value, decimal }: { value: number, decimal: boolean }) {
  return <Row>
    <Col xs={12} style={{
      background: "#000",
      color: "#fff",
      fontSize: "2em",
      textAlign: "right"
    }}>{value}{ decimal && '.'}</Col>
  </Row>;
}