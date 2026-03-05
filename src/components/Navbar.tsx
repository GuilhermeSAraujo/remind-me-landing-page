"use client";

import { Box, Flex, Text, Button, HStack, Link } from "@chakra-ui/react";
import { motion, useScroll, useTransform } from "framer-motion";

const MotionBox = motion.create(Box);

const navLinks = [
  { label: "Como funciona", href: "#how-it-works" },
  { label: "Funcionalidades", href: "#features" },
  { label: "Preços", href: "#pricing" },
  { label: "FAQ", href: "#faq" },
];

export function Navbar() {
  const { scrollY } = useScroll();
  const bg = useTransform(
    scrollY,
    [0, 80],
    ["rgba(11,14,13,0)", "rgba(11,14,13,0.92)"]
  );
  const borderColor = useTransform(
    scrollY,
    [0, 80],
    ["rgba(255,255,255,0)", "rgba(255,255,255,0.06)"]
  );

  return (
    <MotionBox
      as="nav"
      position="fixed"
      top={0}
      left={0}
      right={0}
      zIndex={100}
      style={{ backgroundColor: bg, borderBottomColor: borderColor }}
      borderBottomWidth="1px"
      backdropFilter="blur(20px)"
    >
      <Flex
        maxW="1200px"
        mx="auto"
        px={{ base: 5, md: 8 }}
        py={4}
        align="center"
        justify="space-between"
      >
        <Flex align="center" gap={2}>
          <Box
            w="36px"
            h="36px"
            borderRadius="10px"
            background="linear-gradient(135deg, #25D366 0%, #128C7E 100%)"
            display="flex"
            alignItems="center"
            justifyContent="center"
            fontSize="xl"
          >
            💬
          </Box>
          <Text
            fontWeight="700"
            fontSize="1.15rem"
            letterSpacing="-0.02em"
            color="surface.50"
          >
            remind{" "}
            <Box as="span" color="#25D366">
              me
            </Box>
          </Text>
        </Flex>

        <HStack gap={8} display={{ base: "none", md: "flex" }}>
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              fontSize="0.875rem"
              fontWeight="500"
              color="surface.200"
              _hover={{ color: "surface.50", textDecoration: "none" }}
              transition="color 0.2s"
            >
              {link.label}
            </Link>
          ))}
        </HStack>

        <HStack gap={3}>
          <a href="https://wa.me/5531971444094?text=Ol%C3%A1!%20Quero%20usar%20o%20Remind%20Me" target="_blank" rel="noopener noreferrer">
            <Button
              size="sm"
              background="linear-gradient(135deg, #25D366 0%, #128C7E 100%)"
              color="#0b0e0d"
              fontWeight="600"
              borderRadius="8px"
              _hover={{ opacity: 0.9, transform: "translateY(-1px)" }}
              transition="all 0.2s"
            >
              Começar grátis
            </Button>
          </a>
        </HStack>
      </Flex>
    </MotionBox>
  );
}
