import { Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import { FcSearch } from "react-icons/fc";
import React from "react";

const SearchInput = () => {
  return (
    <InputGroup>
      <InputLeftElement children={<FcSearch />} fontSize="1.8rem" />
      <Input
        borderRadius={20}
        placeholder="Search games here..."
        variant="filled"
      />
    </InputGroup>
  );
};

export default SearchInput;
