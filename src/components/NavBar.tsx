import React from "react";
import { HStack, Image, Text } from "@chakra-ui/react";
import logo from "../assets/logo.png";

const NavBar = () => {
  return (
    <HStack>
      <Image src={logo} boxSize="50" />
      <Text>Navbar</Text>
    </HStack>
  );
};

export default NavBar;
