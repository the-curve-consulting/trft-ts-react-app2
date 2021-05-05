import { inspect } from "util";
import { useState } from "react";
import { Buttons } from "./Buttons";
import { NumberField } from "./NumberField";
import { clear } from "node:console";

type Operator = string | undefined;

export function Calculator() {
  const [value, setValue] = useState<number>(0);
  const [result, setResult] = useState<number>(0);
  const [operator, setOperator] = useState<Operator>();
  const [decimal, setDecimal] = useState<boolean>(false);

  function processEquals() {
    if (!operator) {
      return;
    }

    let newValue;
    switch (operator) {
      case '+':
        newValue = result + value;
        break;
      case '-':
        newValue = result - value;
        break;
      case 'x':
        newValue = result * value;
        break;
      case '/':
        newValue = result / value;
        break;
      default:
        console.warn("Unexpected operator", newValue);
        return;
    }

    setResult(newValue);
    setValue(0);
    setOperator(undefined);
  }

  function handleOperation(op: string) {
    if (operator) {
      processEquals();
    } else {
      setResult(value);
    }

    setValue(0);
    setOperator(op);
  }

  function clear() {
    setOperator(undefined);
    setValue(0);
    setResult(0);
    setDecimal(false);
  }

  function handleCommand(cmd: number) {
    switch (cmd) {
      case 61: // Equals
        processEquals();
        break;
      case 67: // Clear
        clear();
        break;
      case 43:
      case 45:
      case 120:
      case 47:
        handleOperation(String.fromCharCode(cmd));
        break;
      default:
        console.warn('Unhandled command', cmd);
    }
  }

  function handleNumber(val: string) {
    setValue((oldVal) => {
      const oldValStr = oldVal.toString();
      if (val.charCodeAt(0) === 46) {
        if (oldValStr.indexOf('.') >= 0) {
          return oldVal;
        }

        setDecimal(true);
        return oldVal;
      }

      if (decimal) {
        setDecimal(false);
        return parseFloat(oldValStr + "." + val);
      }

      return parseFloat(oldValStr + val);
    });
  }
  return (
    <>
      <NumberField value={(value || result)} decimal={decimal} />
      <Buttons onCommand={(cmd) => handleCommand(cmd)} onNumber={(val) => handleNumber(val)} />
      Calc State:
      <pre>
        {inspect({ value, result, operator, decimal })}
      </pre>
    </>
  );
}