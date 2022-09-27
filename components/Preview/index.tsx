import { Box, Center } from "@chakra-ui/react";
import React, { ReactNode, useState } from "react";

const Preview = ({ children }: { children?: ReactNode }) => {
  return (
    <Center
      w="full"
      bgImage="linear-gradient(120deg, #e0c3fc 0%, #8ec5fc 100%)"
      data-testid="innerContainer-right"
      borderRadius="0px 5px 5px 0px"
    >
      <Box
        w="50%"
        h="60%"
        bgColor="white"
        color="black"
        borderRadius="6px"
        boxShadow="5px 5px 8px rgba(0, 0, 0, 0.5)"
      >
        {children}
      </Box>
    </Center>
  );
};

export default Preview;
