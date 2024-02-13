import { Box, Heading } from "@chakra-ui/react";
import React, { ReactNode } from "react";

interface Props {
  term: string;
  children: ReactNode;
  color: string;
}

const DefinitionItem = ({ term, children, color }: Props) => {
  return (
    <Box marginY={5}>
      <Heading as="dt" fontSize="md" color={color}>
        {term}
      </Heading>
      <dd>{children}</dd>
    </Box>
  );
};

export default DefinitionItem;
