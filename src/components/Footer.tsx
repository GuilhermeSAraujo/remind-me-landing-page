"use client";

import { Box, Flex, Text, Button, Link } from "@chakra-ui/react";
import { motion } from "framer-motion";

const MotionBox = motion.create(Box);

const footerLinks: Record<string, { label: string; href: string }[]> = {
  Produto: [
    { label: "Como funciona", href: "#how-it-works" },
    { label: "Funcionalidades", href: "#features" },
    { label: "Preços", href: "#pricing" },
    { label: "FAQ", href: "#faq" },
  ],
  Empresa: [
    { label: "Sobre", href: "#" },
    { label: "Blog (em breve)", href: "#" },
    { label: "Termos de uso", href: "#" },
    { label: "Privacidade", href: "#" },
  ],
  Contato: [
    { label: "Falar pelo WhatsApp", href: "#" },
  ],
};

export function Footer() {
  return (
    <>
      <Box as="section" py={{ base: 20, md: 28 }}>
        <Flex maxW="1200px" mx="auto" px={{ base: 5, md: 8 }} direction="column" align="center">
          <MotionBox
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            w="full"
          >
            <Box
              p={{ base: 10, md: 16 }}
              borderRadius="20px"
              border="1px solid rgba(37,211,102,0.2)"
              background="linear-gradient(135deg, rgba(37,211,102,0.06) 0%, rgba(37,211,102,0.02) 100%)"
              textAlign="center"
              position="relative"
              overflow="hidden"
            >
              <Box
                position="absolute"
                top="50%"
                left="50%"
                transform="translate(-50%, -50%)"
                w="600px"
                h="300px"
                background="radial-gradient(ellipse, rgba(37,211,102,0.1) 0%, transparent 70%)"
                pointerEvents="none"
              />
              <Text
                as="h2"
                fontSize={{ base: "2.4rem", md: "3.8rem" }}
                fontWeight="800"
                letterSpacing="-0.03em"
                lineHeight="1.1"
                color="surface.50"
                mb={4}
                position="relative"
              >
                Pronto pra nunca mais
                <br />esquecer nada?
              </Text>
              <Text
                color="surface.200"
                fontSize="1.05rem"
                mb={8}
                maxW="460px"
                mx="auto"
                lineHeight="1.7"
                position="relative"
              >
                Começar é grátis. Basta mandar uma mensagem.
              </Text>
              <Flex justify="center" gap={3} flexWrap="wrap" position="relative">
                <Button
                  size="lg"
                  background="linear-gradient(135deg, #25D366 0%, #128C7E 100%)"
                  color="#0b0e0d"
                  fontWeight="700"
                  fontSize="0.95rem"
                  px={8}
                  h="52px"
                  borderRadius="10px"
                  _hover={{ opacity: 0.9, transform: "translateY(-2px)", boxShadow: "0 12px 40px rgba(37,211,102,0.3)" }}
                  transition="all 0.25s"
                >
                  Ativar o Remind Me agora
                </Button>
              </Flex>
            </Box>
          </MotionBox>
        </Flex>
      </Box>

      <Box as="footer" borderTop="1px solid rgba(255,255,255,0.07)" py={12}>
        <Flex
          maxW="1200px"
          mx="auto"
          px={{ base: 5, md: 8 }}
          direction={{ base: "column", md: "row" }}
          justify="space-between"
          gap={10}
        >
          <Box maxW="260px">
            <Flex align="center" gap={2} mb={4}>
              <Box
                w="24px"
                h="24px"
                borderRadius="6px"
                background="linear-gradient(135deg, #25D366 0%, #128C7E 100%)"
                display="flex"
                alignItems="center"
                justifyContent="center"
                fontSize="sm"
              >
                💬
              </Box>
              <Text fontWeight="700" color="surface.50" fontSize="1rem">
                remind{" "}
                <Box as="span" color="#25D366">me</Box>
              </Text>
            </Flex>
            <Text fontSize="0.825rem" color="surface.200" lineHeight="1.7">
              Lembretes pelo WhatsApp.
              <br />
              Do jeito que você fala.
            </Text>
          </Box>

          <Flex gap={{ base: 10, md: 16 }} flexWrap="wrap">
            {Object.entries(footerLinks).map(([category, links]) => (
              <Box key={category}>
                <Text
                  fontSize="0.75rem"
                  fontWeight="600"
                  color="surface.50"
                  letterSpacing="0.08em"
                  textTransform="uppercase"
                  mb={4}
                >
                  {category}
                </Text>
                <Flex direction="column" gap={2.5}>
                  {links.map((link) => (
                    <Link
                      key={link.label}
                      href={link.href}
                      fontSize="0.85rem"
                      color="surface.200"
                      _hover={{ color: "surface.50", textDecoration: "none" }}
                      transition="color 0.2s"
                    >
                      {link.label}
                    </Link>
                  ))}
                </Flex>
              </Box>
            ))}
          </Flex>
        </Flex>

        <Box
          maxW="1200px"
          mx="auto"
          px={{ base: 5, md: 8 }}
          mt={10}
          pt={6}
          borderTop="1px solid rgba(255,255,255,0.05)"
        >
          <Text fontSize="0.78rem" color="surface.200">
            © 2025 Remind Me. Feito com 💚 no Brasil.
          </Text>
          <Text fontSize="xs" color="rgba(255,255,255,0.3)" mt={1}>
            Não somos afiliados ao WhatsApp ou Meta.
          </Text>
        </Box>
      </Box>
    </>
  );
}
