import { Button, Col, Row } from "react-bootstrap";

type OnClickHandler = (button: string) => void;
type OnCommandHandler = (cmd: number) => void;

type Props = { onNumber: OnClickHandler, onCommand: OnCommandHandler };
export function Buttons({ onCommand, onNumber }: Props) {

  const buttons = [
    "C", "±", "%", "/",
    "7", "8", "9", "x",
    "4", "5", "6", "-",
    "1", "2", "3", "+",
    "0", ".", "="
  ];

  function buttonClicked(val: string) {
    if (!val.length) {
      return;
    }

    const chr = val.charCodeAt(0);
    if (!((chr >= 48 && chr <= 57) || chr === 46)) {
      onCommand(chr);
      return;
    }

    onNumber(val);
  }

  function generateButtons() {
    return buttons.map((val, i) => <Col key={`key-${i}`} xs={val === "0" ? 6 : 3} className="my-1">
      <Button onClick={() => buttonClicked(val)} block>{val}</Button>
    </Col>
    );
  }

  return <>
    <Row>
      {generateButtons()}
    </Row>
  </>;
}