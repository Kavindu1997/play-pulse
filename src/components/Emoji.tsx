import { Image, ImageProps } from "@chakra-ui/react";
import topRate from "../assets/good-rate.webp";
import lowRate from "../assets/low-rate.webp";
import midRate from "../assets/mid-rate.webp";

interface Props {
  rating: number;
}

const Emoji = ({ rating }: Props) => {
  if (rating < 3) return null;

  const emojiMap: { [key: number]: ImageProps } = {
    3: { src: lowRate, alt: "low-rate" },
    4: { src: midRate, alt: "mid-rate" },
    5: { src: topRate, alt: "top-rate" },
  };
  return <Image {...emojiMap[rating]} boxSize="30px" marginTop={3} />;
};

export default Emoji;
