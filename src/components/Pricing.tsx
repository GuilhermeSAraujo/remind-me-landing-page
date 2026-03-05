"use client";

import { Box, Flex, Text, Button, SimpleGrid } from "@chakra-ui/react";
import { motion } from "framer-motion";

const MotionBox = motion.create(Box);

interface PlanFeature {
  text: string;
  included: boolean;
}

interface Plan {
  name: string;
  price: string;
  period: string;
  desc: string;
  features: PlanFeature[];
  cta: string;
  href: string;
  highlight: boolean;
  badge?: string;
  disabled: boolean;
}

const plans: Plan[] = [
  {
    name: "Grátis",
    price: "R$ 0",
    period: "para sempre",
    desc: "Para experimentar",
    features: [
      { text: "Até 5 lembretes ativos", included: true },
      { text: "Até 5 interações com IA por dia", included: true },
      { text: "30 dias de Premium grátis ao se cadastrar", included: true },
      { text: "Lembretes ilimitados", included: false },
      { text: "IA ilimitada", included: false },
    ],
    cta: "Começar grátis",
    href: "https://wa.me/5531971444094?text=Ol%C3%A1!%20Quero%20usar%20o%20Remind%20Me",
    highlight: false,
    disabled: false,
  },
  {
    name: "Premium",
    price: "R$ 4,90",
    period: "por mês",
    desc: "Para quem usa de verdade",
    features: [
      { text: "Lembretes ilimitados", included: true },
      { text: "Interações com IA ilimitadas", included: true },
      { text: "Adiar, listar e excluir sem restrições", included: true },
      { text: "Suporte via WhatsApp", included: true },
      { text: "Ativação automática após pagamento", included: true },
    ],
    cta: "Assinar por R$ 4,90/mês",
    href: "https://wa.me/5531971444094?text=Ol%C3%A1!%20Quero%20assinar%20o%20Remind%20Me%20Premium",
    highlight: true,
    badge: "Mais popular",
    disabled: false,
  },
  {
    name: "Equipes",
    price: "Em breve",
    period: "",
    desc: "Para grupos e empresas",
    features: [
      { text: "Múltiplos usuários", included: true },
      { text: "Lembretes para grupos", included: true },
      { text: "Painel de administração", included: true },
      { text: "Integrações via API", included: true },
    ],
    cta: "Entrar na lista de espera",
    href: "https://wa.me/5531971444094?text=Ol%C3%A1!%20Quero%20entrar%20na%20lista%20de%20espera%20do%20plano%20Equipes",
    highlight: false,
    disabled: true,
  },
];

export function Pricing() {
  return (
    <Box as="section" id="pricing" py={{ base: 20, md: 32 }}>
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
            Preços
          </Text>
          <Text
            as="h2"
            fontSize={{ base: "2.4rem", md: "3.5rem" }}
            fontWeight="800"
            letterSpacing="-0.03em"
            lineHeight="1.1"
            color="surface.50"
            mb={4}
          >
            Simples. Transparente. Barato.
          </Text>
          <Text color="surface.200" fontSize="1.05rem" maxW="460px" lineHeight="1.7">
            Comece grátis. Assine quando quiser.
          </Text>
        </MotionBox>

        <SimpleGrid columns={{ base: 1, md: 3 }} gap={5} w="full" alignItems="stretch">
          {plans.map((plan, i) => (
            <MotionBox
              key={plan.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              h="full"
            >
              <Box
                p={7}
                borderRadius="16px"
                border={plan.highlight ? "1px solid rgba(37,211,102,0.4)" : "1px solid rgba(255,255,255,0.07)"}
                bg={plan.highlight ? "rgba(37,211,102,0.05)" : "rgba(255,255,255,0.02)"}
                position="relative"
                h="full"
                display="flex"
                flexDirection="column"
                boxShadow={plan.highlight ? "0 0 60px rgba(37,211,102,0.08)" : "none"}
                opacity={plan.disabled ? 0.6 : 1}
              >
                {plan.badge && (
                  <Box
                    position="absolute"
                    top="-13px"
                    left="50%"
                    transform="translateX(-50%)"
                    px={4}
                    py={1.5}
                    borderRadius="full"
                    background="linear-gradient(135deg, #25D366, #128C7E)"
                    whiteSpace="nowrap"
                  >
                    <Text fontSize="0.7rem" fontWeight="700" color="#0b0e0d" letterSpacing="0.05em" textTransform="uppercase">
                      {plan.badge}
                    </Text>
                  </Box>
                )}

                <Text fontWeight="700" fontSize="1.1rem" color="surface.50" mb={2} letterSpacing="-0.01em">
                  {plan.name}
                </Text>

                <Flex align="baseline" gap={1} mb={2}>
                  <Text fontWeight="800" fontSize="2.8rem" color="surface.50" letterSpacing="-0.04em" lineHeight="1">
                    {plan.price}
                  </Text>
                  {plan.period && (
                    <Text fontSize="0.8rem" color="surface.200" fontWeight="500">
                      /{plan.period}
                    </Text>
                  )}
                </Flex>

                <Text fontSize="0.85rem" color="surface.200" lineHeight="1.6" mb={6}>
                  {plan.desc}
                </Text>

                <Box flex={1} mb={6}>
                  {plan.features.map((f) => (
                    <Flex key={f.text} align="center" gap={3} mb={3}>
                      <Box
                        w="16px"
                        h="16px"
                        borderRadius="full"
                        bg={f.included ? "rgba(37,211,102,0.15)" : "rgba(255,255,255,0.05)"}
                        display="flex"
                        alignItems="center"
                        justifyContent="center"
                        flexShrink={0}
                      >
                        <Text fontSize="0.6rem" color={f.included ? "#25D366" : "rgba(255,255,255,0.3)"} fontWeight="700">
                          {f.included ? "✓" : "✕"}
                        </Text>
                      </Box>
                      <Text fontSize="0.875rem" color={f.included ? "surface.200" : "rgba(255,255,255,0.3)"} fontWeight="400">
                        {f.text}
                      </Text>
                    </Flex>
                  ))}
                </Box>

                <a
                  href={plan.disabled ? undefined : plan.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ width: "100%" }}
                >
                  <Button
                    w="full"
                    h="46px"
                    borderRadius="10px"
                    fontWeight="600"
                    fontSize="0.9rem"
                    background={plan.highlight
                      ? "linear-gradient(135deg, #25D366 0%, #128C7E 100%)"
                      : "rgba(255,255,255,0.06)"
                    }
                    color={plan.highlight ? "#0b0e0d" : "surface.200"}
                    border={!plan.highlight ? "1px solid rgba(255,255,255,0.1)" : "none"}
                    _hover={{
                      opacity: 0.9,
                      transform: plan.disabled ? undefined : "translateY(-1px)",
                      boxShadow: plan.highlight ? "0 8px 30px rgba(37,211,102,0.25)" : "none",
                      color: !plan.highlight ? "surface.50" : undefined,
                    }}
                    transition="all 0.2s"
                    disabled={plan.disabled}
                  >
                    {plan.cta}
                  </Button>
                </a>

                {plan.highlight && (
                  <Text fontSize="xs" color="rgba(255,255,255,0.4)" textAlign="center" mt={3}>
                    Cancele quando quiser. Sem fidelidade.
                  </Text>
                )}
              </Box>
            </MotionBox>
          ))}
        </SimpleGrid>

        <Text fontSize="sm" color="rgba(255,255,255,0.4)" mt={8} textAlign="center">
          💳 O pagamento é feito via link seguro enviado pelo próprio bot no WhatsApp.
        </Text>
      </Flex>
    </Box>
  );
}
