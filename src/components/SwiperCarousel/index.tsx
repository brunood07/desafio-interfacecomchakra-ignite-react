import { Box, Heading, Container, Image, Link as ChakraLink } from "@chakra-ui/react";
import SwiperCore, { Controller, Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import Link from "next/link";

import 'swiper/css';

import { useState } from "react";

type SwiperCarouselItemProps = {
  id: number;
  title: string;
  description: string;
  path: string;
  about: string;
  bg: string;
  totalCountries: number;
  totalLanguages: number;
}

interface SwiperCarouselProps {
  items: SwiperCarouselItemProps[];
}

SwiperCore.use([Controller, Navigation, Pagination]);

export function SwiperCarousel({ items }: SwiperCarouselProps) {
  const [slide, setSlide] = useState<SwiperCore | undefined>(undefined);

  return (
    <Container
      maxWidth={["100%", "container.xl"]}
      p={["0", "auto"]}
    >
      <Swiper
        controller={{
          control: slide
        }}
        navigation
        pagination={{
          clickable: true
        }}
        onSwiper={setSlide}
        spaceBetween={50}
        slidesPerView={1}
      >
        {items.map(item => (
          <SwiperSlide key={item.id}>
            <Link href={item.path} passHref>
              <Box
                w="100%"
                height={["250px", "450px"]}
                as={ChakraLink}
                display="block"
                position="relative"
              >
                <Image
                  src={`continents/${item.bg}`}
                  position="absolute"
                  top="0"
                  left="0"
                  w="100%"
                  height="100%"
                  objectFit="cover"
                  zIndex="0"
                  alt="Foto do continente"
                />
                <Box
                  position="absolute"
                  top="0"
                  left="0"
                  zIndex="1"
                  w="100%"
                  height="100%"
                  bg="rgba(28, 20, 1, 0.35)"
                />
                <Box
                  position="absolute"
                  top="0"
                  pt={["90px", "180px"]}
                  w="100%"
                  height="100%"
                  zIndex="2"
                  textAlign="center"
                >
                  <Heading
                    fontSize={["24px", "48px"]}
                    lineHeight={["36px", "72px"]}
                    color="light.700"
                  >
                    {item.title}
                  </Heading>
                  <Heading
                    mt={["12px", "16px"]}
                    fontSize={["14px", "24px"]}
                    lineHeight={["21px", "36px"]}
                    color="light.300"
                  >
                    {item.description}
                  </Heading>
                </Box>
              </Box>
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
    </Container>
  );
}