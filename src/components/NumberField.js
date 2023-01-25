import React from "react";
import { NumberInput } from "@mantine/core";

function NumberField(props) {
  return (
    <NumberInput
      description={"this is the number field"}
      placeholder={props.placeholder}
      label={props.label}
      withAsterisk={props.withAsterisk}
      min={props.min}
      max={props.max}
    />
  );
}

export default NumberField;
