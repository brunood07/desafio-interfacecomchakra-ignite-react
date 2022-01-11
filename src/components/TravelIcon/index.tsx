import { Flex, useBreakpointValue, Image, Text } from "@chakra-ui/react";

interface TravelIconProps {
  image: string;
  text: string;
}

export function TravelIcon({ image, text }: TravelIconProps) {
  const src = useBreakpointValue({ base: "", md: image });
  
  return (
    <Flex
      direction={{ base: "row", md: "column"}}
      align="center"
      mt={{ base: "6px", md: "0" }}
    > 
      <Image 
        src={src} 
        alt={text} 
        w="85px"
        h="85px"
      />
      <Text
        mt={{ base: "0", md: "16px " }}
        ml={{ base: "8px", md: "0" }}
        fontWeight="semibold"
        fontSize={["md", "xl", "2xl"]}
        textTransform="lowercase"
      >
        {text}
      </Text>
    </Flex>
  );
}