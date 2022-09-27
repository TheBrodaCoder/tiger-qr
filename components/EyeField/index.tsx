import React, { useState } from "react";
import { FormControl, FormLabel, Radio, RadioGroup } from "@chakra-ui/react";

type eyeType = "square" | "round";

const EyeField = ({ updateEye }: { updateEye: (value: eyeType) => void }) => {
  const [currentEye, setCurrentEye] = useState<eyeType>("square");

  const handleEyeChange = (newEye: eyeType) => {
    updateEye(newEye);
    setCurrentEye(newEye);
  };

  return (
    <FormControl>
      <FormLabel>Choose the type of eye</FormLabel>
      <RadioGroup value={currentEye} onChange={handleEyeChange}>
        <Radio value="square">square</Radio>
        <Radio value="round">round</Radio>
      </RadioGroup>
    </FormControl>
  );
};

export default EyeField;
