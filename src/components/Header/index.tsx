import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { Box, Container, Flex, Image, Link as ChakraLink } from "@chakra-ui/react";
import Link from "next/link";

export function Header() {
  const [isActive, setIsActive] = useState(false);
  const { asPath } = useRouter();

  function handleScroll() {
    setIsActive(window.scrollY > 0 ? true : false);
  }

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
  }, []);

  return (
    <Flex
      bg="light.700"
      position="fixed"
      top="0"
      left="0"
      w="100%"
      h="100"
      align="center"
      justify="center"
      boxShadow={isActive ? "0 2px 4px rgba(0, 0, 0, 0.08)" : ""}
      transition="box-shadow 0.3s"
      zIndex="999"
    >
      <Container maxW="container.xl">
        {asPath !== "/" && (
          <Link href="/" passHref>
            <Box
              as={ChakraLink}
              position="absolute"
              w="32px"
              h="32px"
              display="flex"
              alignItems="center"
              justifyContent="center"
            >
              <Image src="voltar.svg" alt="Botão de voltar" h="16px" />
            </Box>
          </Link>
        )}
        <Image src="logo.svg" alt="Logo" mx="auto" w={["147px", "auto"]} />
      </Container>
    </Flex>
  );
}