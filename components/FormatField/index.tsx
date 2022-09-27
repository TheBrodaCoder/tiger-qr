import {
  FormControl,
  FormLabel,
  HStack,
  Radio,
  RadioGroup,
} from "@chakra-ui/react";
import { QRFormData, QR_FORM_FIELD } from "consts/QRForm";
import React, { useState } from "react";

const FormatField = ({
  updateFormat,
}: {
  updateFormat: (value: QRFormData[QR_FORM_FIELD.FORMAT]) => void;
}) => {
  const [currentValue, setCurrentValue] = useState("svg");

  const handleChange = (value: QRFormData[QR_FORM_FIELD.FORMAT]) => {
    updateFormat(value);
    setCurrentValue(value);
  };

  return (
    <FormControl>
      <FormLabel>Choose your current form</FormLabel>
      <RadioGroup
        as={HStack}
        onChange={handleChange}
        value={currentValue}
        spacing={4}
      >
        <Radio value="svg">SVG</Radio>
        <Radio value="png">PNG</Radio>
      </RadioGroup>
    </FormControl>
  );
};

export default FormatField;
