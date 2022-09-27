import { Center, Flex } from "@chakra-ui/react";
import React, { ReactNode } from "react";

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <Center
      h="full"
      minH="100vh"
      px="6"
      py="10"
      data-testid="mainContainer"
      bgColor="bg.secondary"
    >
      <Flex
        direction={{ base: "column", md: "row" }}
        w="full"
        h="full"
        minH={{ base: "100vh", md: "90vh" }}
        borderRadius="6px"
        borderColor="#1d1d1d"
        borderWidth="1px"
        boxShadow="2px 5px 8px rgba(0, 0, 0, 0.5)"
        overflow="hidden"
        data-testid="flexContainer"
      >
        {children}
      </Flex>
    </Center>
  );
};

export default Layout;
