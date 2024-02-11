import { HStack, Icon } from "@chakra-ui/react";
import { IconType } from "react-icons";
import { BsGlobe } from "react-icons/bs";
import { FaWindows } from "react-icons/fa";
import { FcAndroidOs, FcLinux } from "react-icons/fc";
import { MdOutlinePhoneIphone } from "react-icons/md";
import { SiApple, SiNintendo, SiPlaystation5, SiXbox } from "react-icons/si";
import { Platform } from "../entities/Platform";

interface Props {
  platforms: Platform[];
}

const PlatformIconsList = ({ platforms }: Props) => {
  const iconMap: { [key: string]: IconType } = {
    pc: FaWindows,
    playstation: SiPlaystation5,
    xbox: SiXbox,
    mac: SiApple,
    linux: FcLinux,
    android: FcAndroidOs,
    ios: MdOutlinePhoneIphone,
    nintendo: SiNintendo,
    web: BsGlobe,
  };
  return (
    <HStack marginY="10px">
      {platforms.map((platform) => (
        <Icon key={platform.id} as={iconMap[platform.slug]} color={"gray.500"}>
          {platform.name}
        </Icon>
      ))}
    </HStack>
  );
};

export default PlatformIconsList;
