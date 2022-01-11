import { Box, Heading, Image, Text, Tooltip } from "@chakra-ui/react";

interface CountryProps {
  flag: string;
  name: string;
}

interface CitiesProps {
  id: number;
  name: string;
  bg: string;
  country: CountryProps;
  continentId: number;
}

interface CityProps {
  city: CitiesProps;
}

export function City({ city }: CityProps) {
  return (
    <Box
      w="100%"
    >
      <Image 
        src={`cities/${city.bg}`}
        w="100%"
        h="173px"
        objectFit="cover"
        borderRadius="4px 4px 0 0"
        alt={city.name}
      />

      <Box
        w="100%"
        p="18px 24px 24px 18px"
        border="1px solid rgba(255, 186, 8, 0.5)"
        borderTop="none"
        borderRadius="0 0 4px 4px"
        bg="light.900"
        position="relative"
      >
        <Heading
          fontSize="20px"
          lineHeight="25px"
          fontWeight="semibold"
          fontFamily="secondary"
        >
          {city.name}
        </Heading>
        <Text
          mt="12px"
          color="dark.200"
          fontFamily="secondary"
        >
          {city.country.name}
        </Text>
        <Tooltip
          bg="dark.500"
          label={city.country.name}
        >
          <Image 
            src={`countries/${city.country.flag}`}
            objectFit="cover"
            w="30px"
            h="30px"
            borderRadius="50%"
            position="absolute"
            top="38px"
            right="24px"
            alt={city.country.name}
          />
        </Tooltip>
      </Box>
    </Box>
  );
}