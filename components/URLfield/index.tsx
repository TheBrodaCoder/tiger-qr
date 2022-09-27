import { FormControl, FormLabel, Input, Stack } from "@chakra-ui/react";
import React from "react";

const URLField = ({ updateUrl }: { updateUrl: (value: string) => void }) => {
  return (
    <FormControl as={Stack}>
      <FormLabel>Value for your QR</FormLabel>
      <Input onChange={(e) => updateUrl(e.target.value)} />
    </FormControl>
  );
};

export default URLField;
