import { Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import { FcSearch } from "react-icons/fc";
import React, { useRef } from "react";

interface Props {
  onSearch: (searchText: string) => void;
}

const SearchInput = ({ onSearch }: Props) => {
  const ref = useRef<HTMLInputElement>(null);
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        if (ref.current) onSearch(ref.current.value);
      }}
    >
      <InputGroup>
        <InputLeftElement children={<FcSearch />} fontSize="1.8rem" />
        <Input
          ref={ref}
          borderRadius={20}
          placeholder="Search games here..."
          variant="filled"
        />
      </InputGroup>
    </form>
  );
};

export default SearchInput;
