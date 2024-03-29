import { Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import { FcSearch } from "react-icons/fc";
import React, { useRef } from "react";
import useGameQueryStore from "../store";
import { useNavigate } from "react-router-dom";

const SearchInput = () => {
  const ref = useRef<HTMLInputElement>(null);
  const setSearchText = useGameQueryStore((s) => s.setSearchText);
  const navigate = useNavigate();
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        if (ref.current) setSearchText(ref.current.value);
        navigate("/");
      }}
    >
      <InputGroup>
        <InputLeftElement children={<FcSearch />} fontSize="2rem" />
        <Input
          size="lg"
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
