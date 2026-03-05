"use client";

import { Box, Flex, Text, SimpleGrid } from "@chakra-ui/react";
import { motion } from "framer-motion";

const MotionBox = motion.create(Box);

const steps = [
  {
    number: "1",
    icon: "💬",
    title: "Manda uma mensagem",
    desc: "Escreve para o número do Remind Me no WhatsApp, em português, do jeito que você falar.",
  },
  {
    number: "2",
    icon: "🤖",
    title: "A IA entende",
    desc: "O bot usa inteligência artificial para identificar o que você quer lembrar, quando e com que frequência.",
  },
  {
    number: "3",
    icon: "🔔",
    title: "Você recebe na hora certa",
    desc: "Na data e hora marcadas, o Remind Me manda a notificação direto no seu WhatsApp.",
  },
];

export function HowItWorks() {
  return (
    <Box as="section" id="how-it-works" py={{ base: 20, md: 32 }} position="relative">
      <Box
        position="absolute"
        top={0}
        left="50%"
        transform="translateX(-50%)"
        w="1px"
        h="120px"
        background="linear-gradient(to bottom, transparent, rgba(37,211,102,0.4), transparent)"
      />

      <Flex maxW="1200px" mx="auto" px={{ base: 5, md: 8 }} direction="column" align="center">
        <MotionBox
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          textAlign="center"
          mb={4}
        >
          <Text
            fontSize="0.75rem"
            fontWeight="700"
            color="#25D366"
            letterSpacing="0.12em"
            textTransform="uppercase"
            mb={4}
          >
            Como funciona
          </Text>
          <Text
            as="h2"
            fontSize={{ base: "2.4rem", md: "3.5rem" }}
            fontWeight="800"
            letterSpacing="-0.03em"
            lineHeight="1.1"
            color="surface.50"
          >
            Três passos. Só isso.
          </Text>
        </MotionBox>

        <MotionBox
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          mb={16}
          textAlign="center"
        >
          <Text color="surface.200" fontSize="1.05rem" maxW="480px" lineHeight="1.7">
            Não tem app pra baixar, não tem formulário pra preencher.
          </Text>
        </MotionBox>

        <SimpleGrid columns={{ base: 1, md: 3 }} gap={8} w="full" position="relative">
          <Box
            display={{ base: "none", md: "block" }}
            position="absolute"
            top="24px"
            left="33%"
            w="60px"
            borderTop="2px dashed"
            borderColor="rgba(37,211,102,0.3)"
            transform="translateX(-50%)"
          />
          <Box
            display={{ base: "none", md: "block" }}
            position="absolute"
            top="24px"
            left="66%"
            w="60px"
            borderTop="2px dashed"
            borderColor="rgba(37,211,102,0.3)"
            transform="translateX(-50%)"
          />

          {steps.map((step, i) => (
            <MotionBox
              key={step.number}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
            >
              <Flex direction="column" align="center" textAlign="center" gap={4}>
                <Box
                  w="48px"
                  h="48px"
                  borderRadius="full"
                  background="linear-gradient(135deg, #25D366, #128C7E)"
                  display="flex"
                  alignItems="center"
                  justifyContent="center"
                >
                  <Text fontWeight="800" color="white" fontSize="lg">{step.number}</Text>
                </Box>
                <Text fontSize="4xl">{step.icon}</Text>
                <Text as="h3" fontWeight="700" fontSize="1.1rem" color="surface.50">
                  {step.title}
                </Text>
                <Text color="surface.200" fontSize="sm" lineHeight="1.7" maxW="280px">
                  {step.desc}
                </Text>
              </Flex>
            </MotionBox>
          ))}
        </SimpleGrid>
      </Flex>
    </Box>
  );
}
