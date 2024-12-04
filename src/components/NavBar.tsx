import { HStack, Image, Text } from "@chakra-ui/react";
import logo from "../assets/logo.jpg";
import SearchInput from "./SearchInput";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <HStack style={{ marginBottom: "10px" }}>
      <Link to="/">
        <Image src={logo} boxSize="60px" objectFit="cover" />
      </Link>

      <Text>gamehub</Text>
      <SearchInput />
    </HStack>
  );
};

export default NavBar;
