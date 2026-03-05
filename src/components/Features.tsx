"use client";

import { Box, Flex, Text, SimpleGrid } from "@chakra-ui/react";
import { motion } from "framer-motion";

const MotionBox = motion.create(Box);

const features = [
  {
    icon: "🗣️",
    title: "Fale como você fala",
    desc: "Sem comandos especiais. \"Me lembra de ligar pra mãe sexta às 18h\" já funciona.",
    tag: "Linguagem natural",
  },
  {
    icon: "🔁",
    title: "Lembretes que se repetem",
    desc: "Diário, semanal, mensal, só dias úteis, só fim de semana, você escolhe a frequência.",
    tag: "Recorrência",
  },
  {
    icon: "⏩",
    title: "Adiar com uma palavra",
    desc: "Responde \"amanhã\" ou \"30 minutos\" direto na notificação. O bot reagenda na hora.",
    tag: "Adiar",
  },
  {
    icon: "📋",
    title: "Lista e exclui fácil",
    desc: "Manda \"listar\" pra ver tudo. Manda \"apagar 2\" ou responde a mensagem com \"deletar\".",
    tag: "Gerenciar",
  },
  {
    icon: "⚡",
    title: "Parece uma conversa real",
    desc: "Indicador de digitação, reações de emoji (✅ 🗑️ 🚫) e confirmações em PT-BR.",
    tag: "Respostas rápidas",
  },
  {
    icon: "🔒",
    title: "Só seu número, nada mais",
    desc: "Nenhum dado pessoal além do número do WhatsApp é necessário para criar uma conta.",
    tag: "Privacidade",
  },
];

export function Features() {
  return (
    <Box as="section" id="features" py={{ base: 20, md: 32 }} position="relative">
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
          mb={4}
          textAlign="center"
        >
          <Text
            fontSize="0.75rem"
            fontWeight="600"
            color="#25D366"
            letterSpacing="0.12em"
            textTransform="uppercase"
            mb={4}
          >
            Funcionalidades
          </Text>
          <Text
            as="h2"
            fontSize={{ base: "2.4rem", md: "3.5rem" }}
            fontWeight="800"
            letterSpacing="-0.03em"
            lineHeight="1.1"
            color="surface.50"
            maxW="650px"
          >
            Tudo que você precisa, nada que você não precisa.
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
          <Text color="surface.200" fontSize="1.05rem" maxW="500px" lineHeight="1.7">
            Funcionalidades pensadas para quem vive no WhatsApp.
          </Text>
        </MotionBox>

        <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} gap={5} w="full">
          {features.map((feat, i) => (
            <MotionBox
              key={feat.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
            >
              <Box
                p={6}
                borderRadius="14px"
                border="1px solid rgba(255,255,255,0.07)"
                bg="rgba(255,255,255,0.02)"
                h="full"
                position="relative"
                overflow="hidden"
                _hover={{
                  borderColor: "rgba(37,211,102,0.25)",
                  bg: "rgba(37,211,102,0.03)",
                  transform: "translateY(-3px)",
                  boxShadow: "0 20px 60px rgba(0,0,0,0.3)",
                }}
                transition="all 0.3s"
                cursor="default"
              >
                <Box
                  position="absolute"
                  top={0}
                  right={0}
                  w="60px"
                  h="60px"
                  background="radial-gradient(circle at top right, rgba(37,211,102,0.08), transparent 70%)"
                />

                <Flex align="center" justify="space-between" mb={4}>
                  <Box
                    w="44px"
                    h="44px"
                    borderRadius="10px"
                    bg="rgba(37,211,102,0.1)"
                    border="1px solid rgba(37,211,102,0.2)"
                    display="flex"
                    alignItems="center"
                    justifyContent="center"
                    fontSize="1.2rem"
                  >
                    {feat.icon}
                  </Box>
                  <Box
                    px={3}
                    py={1}
                    borderRadius="full"
                    bg="rgba(37,211,102,0.08)"
                    border="1px solid rgba(37,211,102,0.2)"
                  >
                    <Text fontSize="0.65rem" fontWeight="600" color="#25D366" letterSpacing="0.08em" textTransform="uppercase">
                      {feat.tag}
                    </Text>
                  </Box>
                </Flex>

                <Text fontWeight="700" fontSize="1.05rem" color="surface.50" mb={2} letterSpacing="-0.01em">
                  {feat.title}
                </Text>
                <Text fontSize="0.875rem" color="surface.200" lineHeight="1.65">
                  {feat.desc}
                </Text>
              </Box>
            </MotionBox>
          ))}
        </SimpleGrid>
      </Flex>
    </Box>
  );
}
