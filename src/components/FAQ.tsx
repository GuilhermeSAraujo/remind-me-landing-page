"use client";

import { Box, Flex, Text, Accordion } from "@chakra-ui/react";
import { motion } from "framer-motion";

const MotionBox = motion.create(Box);

const faqItems = [
  {
    question: "Preciso baixar algum app?",
    answer: "Não. O Remind Me funciona 100% pelo WhatsApp que você já tem instalado. Nenhum download necessário.",
  },
  {
    question: "Como me cadastro?",
    answer: "Só mandar qualquer mensagem para o número do Remind Me. Sua conta é criada automaticamente pelo número do WhatsApp.",
  },
  {
    question: "Posso cancelar o Premium a qualquer hora?",
    answer: "Sim. Basta parar de renovar. Não há fidelidade, contratos ou multas.",
  },
  {
    question: "O que acontece quando atinjo o limite grátis?",
    answer: "O bot te avisa e envia um link de pagamento. Após pagar, a ativação é automática — o bot confirma no WhatsApp em segundos.",
  },
  {
    question: "Meus lembretes são seguros?",
    answer: "Guardamos apenas seu número de WhatsApp e os textos dos lembretes. Nenhuma informação financeira é processada pelo bot — o pagamento passa por uma plataforma segura externa.",
  },
  {
    question: "Funciona para lembretes recorrentes?",
    answer: "Sim. Você pode criar lembretes diários, semanais, mensais, só em dias úteis, só no fim de semana, e mais.",
  },
];

export function FAQ() {
  return (
    <Box as="section" id="faq" py={{ base: 20, md: 32 }}>
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
            fontWeight="700"
            color="#25D366"
            letterSpacing="0.12em"
            textTransform="uppercase"
            mb={4}
          >
            Dúvidas frequentes
          </Text>
          <Text
            as="h2"
            fontSize={{ base: "2.4rem", md: "3.5rem" }}
            fontWeight="800"
            letterSpacing="-0.03em"
            lineHeight="1.1"
            color="surface.50"
          >
            Perguntas que todo mundo faz.
          </Text>
        </MotionBox>

        <MotionBox
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          w="full"
          maxW="680px"
        >
          <Accordion.Root collapsible>
            {faqItems.map((item, i) => (
              <Accordion.Item key={i} value={`faq-${i}`} borderColor="rgba(255,255,255,0.08)">
                <Accordion.ItemTrigger
                  py={4}
                  cursor="pointer"
                  _hover={{ bg: "rgba(255,255,255,0.03)" }}
                >
                  <Box flex={1} textAlign="left" fontWeight="600" color="surface.50" fontSize="sm">
                    {item.question}
                  </Box>
                  <Accordion.ItemIndicator color="#25D366" />
                </Accordion.ItemTrigger>
                <Accordion.ItemContent>
                  <Accordion.ItemBody>
                    <Box pb={4} color="rgba(255,255,255,0.6)" fontSize="sm" lineHeight="1.7">
                      {item.answer}
                    </Box>
                  </Accordion.ItemBody>
                </Accordion.ItemContent>
              </Accordion.Item>
            ))}
          </Accordion.Root>
        </MotionBox>
      </Flex>
    </Box>
  );
}
