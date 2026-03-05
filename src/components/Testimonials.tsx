"use client";

import { Box, Flex, Text, SimpleGrid, HStack } from "@chakra-ui/react";
import { motion } from "framer-motion";

const MotionBox = motion.create(Box);

const testimonials = [
  {
    quote: "Eu usava alarmes no celular pra tudo. Agora mando uma mensagem pro Remind Me e esqueço. Ele lembra por mim.",
    name: "Mariana Costa",
    role: "Freelancer",
    city: "SP",
    avatar: "MC",
  },
  {
    quote: "Lembro de tomar medicação todos os dias graças ao bot. 30 dias grátis já me convenceram a assinar.",
    name: "Rafael Ferreira",
    role: "Estudante de medicina",
    city: "RJ",
    avatar: "RF",
  },
  {
    quote: "R$ 4,90 por mês pelo tempo que eu economizo? Fechado na hora.",
    name: "Ana Luiza",
    role: "Empreendedora",
    city: "BH",
    avatar: "AL",
  },
];

export function Testimonials() {
  return (
    <Box as="section" py={{ base: 20, md: 32 }}>
      <Flex maxW="1200px" mx="auto" px={{ base: 5, md: 8 }} direction="column" align="center">
        <MotionBox
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          textAlign="center"
          mb={16}
        >
          <Text
            fontSize="0.75rem"
            fontWeight="600"
            color="#25D366"
            letterSpacing="0.12em"
            textTransform="uppercase"
            mb={4}
          >
            Depoimentos
          </Text>
          <Text
            as="h2"
            fontSize={{ base: "2.4rem", md: "3.5rem" }}
            fontWeight="800"
            letterSpacing="-0.03em"
            lineHeight="1.1"
            color="surface.50"
          >
            Quem usa, recomenda.
          </Text>
        </MotionBox>

        <SimpleGrid columns={{ base: 1, md: 3 }} gap={5} w="full">
          {testimonials.map((t, i) => (
            <MotionBox
              key={t.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <Box
                p={6}
                borderRadius="14px"
                border="1px solid rgba(255,255,255,0.07)"
                bg="rgba(255,255,255,0.02)"
                h="full"
                _hover={{
                  borderColor: "rgba(37,211,102,0.2)",
                  transform: "translateY(-3px)",
                }}
                transition="all 0.3s"
              >
                <HStack gap={1} mb={4}>
                  {Array.from({ length: 5 }).map((_, j) => (
                    <Box key={j} w="12px" h="12px" bg="#25D366" borderRadius="2px" />
                  ))}
                </HStack>

                <Text
                  fontSize="0.925rem"
                  color="surface.100"
                  lineHeight="1.7"
                  mb={6}
                  fontStyle="italic"
                >
                  &ldquo;{t.quote}&rdquo;
                </Text>

                <Flex align="center" gap={3}>
                  <Box
                    w="38px"
                    h="38px"
                    borderRadius="full"
                    background="linear-gradient(135deg, #25D366 0%, #128C7E 100%)"
                    display="flex"
                    alignItems="center"
                    justifyContent="center"
                    flexShrink={0}
                  >
                    <Text fontSize="0.7rem" fontWeight="700" color="#0b0e0d">
                      {t.avatar}
                    </Text>
                  </Box>
                  <Box>
                    <Text fontSize="0.85rem" fontWeight="600" color="surface.50">
                      {t.name}
                    </Text>
                    <Text fontSize="0.75rem" color="surface.200">
                      {t.role} · {t.city}
                    </Text>
                  </Box>
                </Flex>
              </Box>
            </MotionBox>
          ))}
        </SimpleGrid>
      </Flex>
    </Box>
  );
}
