import { HStack, Image, Text } from "@chakra-ui/react";
import logo from "../assets/logo.jpg";
import SearchInput from "./SearchInput";

interface Props {
  onSearch: (searchText: string) => void;
}

const NavBar = ({ onSearch }: Props) => {
  return (
    <HStack style={{ marginBottom: "10px" }}>
      <Image src={logo} boxSize="60px" />
      <Text>gamehub</Text>
      <SearchInput onSearch={onSearch} />
    </HStack>
  );
};

export default NavBar;
