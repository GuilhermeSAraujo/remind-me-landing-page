"use client";

import { Box, Flex, Text, Button, HStack, SimpleGrid, Input } from "@chakra-ui/react";
import { motion } from "framer-motion";

const MotionBox = motion.create(Box);
const MotionFlex = motion.create(Flex);

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.12, duration: 0.65, ease: [0.25, 0.1, 0.25, 1] },
  }),
};

const chatMessages = [
  { from: "user" as const, text: "Me lembre de tomar vitamina todo dia às 8h" },
  { from: "bot" as const, text: "✅ Feito! Vou te lembrar de tomar vitamina todos os dias às 8h 💊" },
  { from: "user" as const, text: "Me lembre de reunião amanhã às 14h" },
  { from: "bot" as const, text: "⏰ Hora de: reunião!" },
];

export function Hero() {
  return (
    <Box
      as="section"
      position="relative"
      minH="100vh"
      display="flex"
      alignItems="center"
      overflow="hidden"
      pt="80px"
    >
      <Box
        position="absolute"
        inset={0}
        opacity={0.4}
        backgroundImage={`
          linear-gradient(rgba(37,211,102,0.07) 1px, transparent 1px),
          linear-gradient(90deg, rgba(37,211,102,0.07) 1px, transparent 1px)
        `}
        backgroundSize="60px 60px"
        backgroundPosition="center center"
        style={{ maskImage: "radial-gradient(ellipse 80% 70% at 50% 50%, black 40%, transparent 100%)" }}
      />

      <Box
        position="absolute"
        top="15%"
        left="50%"
        transform="translate(-50%, -50%)"
        w="700px"
        h="700px"
        borderRadius="full"
        background="radial-gradient(circle, rgba(37,211,102,0.12) 0%, transparent 65%)"
        pointerEvents="none"
      />

      <SimpleGrid
        columns={{ base: 1, lg: 2 }}
        gap={12}
        maxW="1200px"
        mx="auto"
        px={{ base: 5, md: 8 }}
        py={{ base: 10, lg: 0 }}
        position="relative"
        zIndex={1}
        alignItems="center"
        w="full"
      >
        <Flex
          direction="column"
          align={{ base: "center", lg: "flex-start" }}
          textAlign={{ base: "center", lg: "left" }}
        >
          <MotionBox variants={fadeUp} initial="hidden" animate="visible" custom={0} mb={7}>
            <Box
              display="inline-flex"
              alignItems="center"
              gap={2}
              px={4}
              py={2}
              borderRadius="full"
              border="1px solid rgba(37,211,102,0.3)"
              bg="rgba(37,211,102,0.06)"
            >
              <Box
                w="6px"
                h="6px"
                borderRadius="full"
                bg="#25D366"
                boxShadow="0 0 8px #25D366"
                style={{ animation: "pulse 2s infinite" }}
              />
              <Text fontSize="0.78rem" fontWeight="500" color="#25D366" letterSpacing="0.05em" textTransform="uppercase">
                ✓ 30 dias grátis de Premium
              </Text>
            </Box>
          </MotionBox>

          <MotionBox variants={fadeUp} initial="hidden" animate="visible" custom={1} mb={6}>
            <Text
              as="h1"
              fontSize={{ base: "3rem", md: "4rem", lg: "4.5rem" }}
              fontWeight="800"
              lineHeight="1.05"
              letterSpacing="-0.04em"
              color="surface.50"
            >
              Seus lembretes,{" "}
              <Box
                as="span"
                background="linear-gradient(135deg, #25D366 0%, #128C7E 100%)"
                backgroundClip="text"
                style={{ WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}
              >
                no WhatsApp
              </Box>{" "}
              que você já usa.
            </Text>
          </MotionBox>

          <MotionBox variants={fadeUp} initial="hidden" animate="visible" custom={2} mb={8}>
            <Text
              fontSize={{ base: "1rem", md: "1.15rem" }}
              color="surface.200"
              maxW="480px"
              lineHeight="1.7"
            >
              Sem baixar app. Sem cadastrar cartão. Só manda mensagem e pronto
             , o Remind Me cuida do resto.
            </Text>
          </MotionBox>

          <MotionFlex
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={3}
            direction={{ base: "column", sm: "row" }}
            gap={3}
            mb={6}
          >
            <a href="https://wa.me/5531971444094?text=Ol%C3%A1!%20Quero%20ativar%20o%20Remind%20Me" target="_blank" rel="noopener noreferrer">
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
                Ativar agora
              </Button>
            </a>
            <a href="#how-it-works">
              <Button
                size="lg"
                variant="outline"
                borderColor="rgba(255,255,255,0.12)"
                color="surface.200"
                fontWeight="500"
                fontSize="0.95rem"
                px={8}
                h="52px"
                borderRadius="10px"
                _hover={{ borderColor: "rgba(37,211,102,0.4)", color: "surface.50", bg: "rgba(37,211,102,0.04)" }}
                transition="all 0.25s"
              >
                Ver como funciona ↓
              </Button>
            </a>
          </MotionFlex>

          <MotionBox variants={fadeUp} initial="hidden" animate="visible" custom={4}>
            <HStack gap={0}>
              {["MC", "RF", "AL", "JB", "TS"].map((initials, idx) => (
                <Box
                  key={initials}
                  w="32px"
                  h="32px"
                  borderRadius="full"
                  background="linear-gradient(135deg, #25D366 0%, #128C7E 100%)"
                  border="2px solid #0b0e0d"
                  display="flex"
                  alignItems="center"
                  justifyContent="center"
                  ml={idx > 0 ? "-8px" : "0"}
                  zIndex={5 - idx}
                >
                  <Text fontSize="0.55rem" fontWeight="700" color="#0b0e0d">
                    {initials}
                  </Text>
                </Box>
              ))}
              <Text fontSize="sm" color="rgba(255,255,255,0.5)" ml={3}>
                500+ usuários ativos no Brasil
              </Text>
            </HStack>
          </MotionBox>
        </Flex>

        <MotionBox variants={fadeUp} initial="hidden" animate="visible" custom={2}>
          <Box
            borderRadius="24px"
            border="6px solid rgba(255,255,255,0.12)"
            bg="#111"
            maxW="340px"
            mx="auto"
            overflow="hidden"
            boxShadow="0 40px 120px rgba(0,0,0,0.6)"
          >
            <Flex
              align="center"
              gap={3}
              p={3}
              bg="#111714"
              borderBottom="1px solid rgba(255,255,255,0.08)"
            >
              <Box
                w="36px"
                h="36px"
                borderRadius="full"
                background="linear-gradient(135deg, #25D366, #128C7E)"
                display="flex"
                alignItems="center"
                justifyContent="center"
              >
                <Text fontSize="sm" fontWeight="700" color="white">R</Text>
              </Box>
              <Box>
                <Text fontWeight="700" fontSize="sm" color="white">Remind Me</Text>
                <HStack gap={1}>
                  <Box w="6px" h="6px" borderRadius="full" bg="#25D366" />
                  <Text fontSize="xs" color="#25D366">online</Text>
                </HStack>
              </Box>
            </Flex>

            <Flex direction="column" align="stretch" p={3} gap={2} bg="#0b0e0d" minH="280px">
              {chatMessages.map((msg, idx) => (
                <MotionBox
                  key={idx}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.8 + idx * 0.4, duration: 0.4 }}
                  alignSelf={msg.from === "user" ? "flex-end" : "flex-start"}
                  maxW="85%"
                  px={3}
                  py={2}
                  borderRadius="12px"
                  bg={msg.from === "user" ? "rgba(255,255,255,0.08)" : "rgba(37,211,102,0.12)"}
                  fontSize="sm"
                  color="rgba(255,255,255,0.85)"
                >
                  {msg.text}
                </MotionBox>
              ))}
            </Flex>

            <Flex
              align="center"
              gap={2}
              p={3}
              bg="#111714"
              borderTop="1px solid rgba(255,255,255,0.08)"
            >
              <Input
                placeholder="Digite uma mensagem"
                fontSize="sm"
                bg="rgba(255,255,255,0.08)"
                borderRadius="full"
                border="none"
                color="rgba(255,255,255,0.6)"
                size="sm"
              />
              <Box
                as="button"
                w="32px"
                h="32px"
                minW="32px"
                borderRadius="full"
                bg="#25D366"
                display="flex"
                alignItems="center"
                justifyContent="center"
                aria-label="send"
              >
                <Text fontSize="sm" color="white">→</Text>
              </Box>
            </Flex>
          </Box>
        </MotionBox>
      </SimpleGrid>

      <style>{`
        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.4; }
        }
      `}</style>
    </Box>
  );
}
