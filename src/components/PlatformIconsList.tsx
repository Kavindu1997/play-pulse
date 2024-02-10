import React from "react";
import { Platform } from "../hooks/usePlatforms";
import { HStack, Icon, Text } from "@chakra-ui/react";
import { FaWindows } from "react-icons/fa";
import { SiPlaystation5, SiXbox, SiApple } from "react-icons/si";
import { FcLinux, FcAndroidOs } from "react-icons/fc";
import { MdOutlinePhoneIphone } from "react-icons/md";
import { SiNintendo } from "react-icons/si";
import { BsGlobe } from "react-icons/bs";
import { IconType } from "react-icons";

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
