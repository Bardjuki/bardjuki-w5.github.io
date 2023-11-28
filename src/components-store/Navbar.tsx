import { HStack, Image } from "@chakra-ui/react";
import ShoppingCart from "../assets/ShoppingCart.png";
import ColorModeSwitch from "../components-home/ColorModeSwitch";
import SearchInput from "./SearchInputProduct";

interface Props {
  onSearch: (searchText: string) => void;
}

const NavBar = ({ onSearch }: Props) => {
  return (
    <HStack padding="10px">
      <Image src={ShoppingCart} boxSize="60px" />
      <SearchInput onSearch={onSearch} />
      <ColorModeSwitch />
    </HStack>
  );
};

export default NavBar;
