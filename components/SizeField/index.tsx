import {
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  InputRightAddon,
  InputRightElement,
} from "@chakra-ui/react";
import React from "react";

const SizeField = ({ updateSize }: { updateSize: (value: number) => void }) => {
  return (
    <FormControl>
      <FormLabel>Change your size</FormLabel>
      <InputGroup>
        <Input
          type="number"
          placeholder="200"
          onChange={(e) => updateSize(Number(e.target.value))}
        />
        <InputRightAddon
          sx={{
            bg: "gray.200",
            color: "black",
          }}
        >
          PX
        </InputRightAddon>
      </InputGroup>
    </FormControl>
  );
};

export default SizeField;
