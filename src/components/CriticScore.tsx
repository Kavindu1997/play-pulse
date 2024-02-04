import { Badge } from "@chakra-ui/react";

interface Props {
  score: number;
}

const CriticScore = ({ score }: Props) => {
  let color = score > 90 ? "purple" : score > 85 ? "orange" : "pink";
  return (
    <Badge colorScheme={color} fontSize="16px" paddingX={2} borderRadius="10px">
      {score}
    </Badge>
  );
};

export default CriticScore;
