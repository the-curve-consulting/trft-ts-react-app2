import { useState } from "react";
import { Buttons } from "./Buttons";
import { NumberField } from "./NumberField";

export function Calculator() {
  const [value, setValue] = useState<string>("");

  function buttonClick(val: string) {
    if (!val.length) {
      return;
    }

    const chr = val.charCodeAt(0);
    if ((chr >= 48 && chr <= 57) || chr === 46) {      
      setValue((oldVal) => {
        if (chr === 46 && oldVal.indexOf('.') >= 0) {
          return oldVal;
        }
        
        return oldVal + val;
      });
    }
  }

  return (
    <>
      <NumberField value={value} />
      <Buttons onButtonClick={(val) => buttonClick(val)} />
    </>
  );
}