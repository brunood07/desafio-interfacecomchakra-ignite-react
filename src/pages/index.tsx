import { Box, Container, Heading, Text, Image, Divider } from "@chakra-ui/react";
import { GetStaticProps } from "next";
import { SwiperCarousel } from "../components/SwiperCarousel";
import { TravelIcon } from "../components/TravelIcon";

import db from "../data/db.json";

interface ContinentProps {
  id: number;
  title: string;
  description: string;
  path: string;
  about: string;
  bg: string;
  totalCountries: number;
  totalLanguages: number;
}

interface HomeProps {
  continents: ContinentProps[];
}

export default function Home({ continents }: HomeProps) {
  return (
    <Box>
      <Box
        bg="url('background.png')"
        bgPosition="center"
        bgSize="cover"
        h={["163", "335"]}
        mt="100"
      >
        <Container
          maxW="container.xl"
          display="flex"
          justifyContent="space-between"
        >
          <Box
            pt={["28px", "70"]}
          >
            <Heading
              color="light.700"
              fontWeight={["medium", "bold"]}
              fontSize={["20px", "36px"]}
            >
              5 Continentes, <br />
              infinitas possibilidades.
            </Heading>
            <Text
              color="light.300"
              maxW="524"
              fontSize={["16px", "20px"]}
              mt={["8px", "20px"]}
              lineHeight={["21px", "30px"]}
            >
              Chegou a hora de tirar do papel a viagem que você sempre sonhou.
            </Text>
          </Box>
          <Image src="airplane.svg" alt="Avião" display={{ base: "none", "lg": "block"}} mt="76" />
        </Container>
      </Box>

      <Box pt="80px">
        <Container
          maxW={["275px", "container.xl"]}
          display="flex"
          flexWrap={{ base: "wrap", md: "nowrap" }}
          flexBasis={1}
          justifyContent="space-between"
        >
          <TravelIcon image="nightlife.svg" text="Vida noturna" />
          <TravelIcon image="beach.svg" text="Praia" />
          <TravelIcon image="modern.svg" text="Moderno" />
          <TravelIcon image="classic.svg" text="Clássico" />
          <TravelIcon image="more.svg" text="e mais..." />

        </Container>
      </Box>

      <Divider 
        w="90px"
        h="2px"
        borderColor="dark.500"
        borderBottomWidth="2px"
        opacity="1"
        margin="80px auto 52px auto"
      />

      <Box>
        <Heading
          textAlign="center"
          fontSize={["20px", "36px"]}
          fontWeight="semibold"
          lineHeight={["30px", "54px"]}
        >
          Vamos nessa?
          <br />
          Então escolha seu continente
        </Heading>
      </Box>

      <Box 
        my="52px"
      >
        <SwiperCarousel items={continents} />
      </Box>
    </Box>
  );
}

export const getStaticProps: GetStaticProps<HomeProps> = async () => {
  const continents: ContinentProps[] = db.continents;

  return {
    props: {
      continents
    }
  }
}