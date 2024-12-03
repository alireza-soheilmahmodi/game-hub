import { HStack, Image, Text } from "@chakra-ui/react";
import logo from "../assets/logo.jpg";
import SearchInput from "./SearchInput";

const NavBar = () => {
  return (
    <HStack style={{ marginBottom: "10px" }}>
      <Image src={logo} boxSize="60px" />
      <Text>gamehub</Text>
      <SearchInput />
    </HStack>
  );
};

export default NavBar;
