# plan.md — Remind Me Landing Page Redesign

## Goal

Transform the current "Synapse" placeholder landing page into the official **Remind Me** marketing site — a conversion-focused page targeting Brazilian WhatsApp users and driving signups for the freemium subscription.

All copy is in **Brazilian Portuguese**. The design keeps a dark, premium feel while adopting WhatsApp-native green as the brand color.

---

## 1. Design System Changes

### 1.1 Color Palette (`src/theme/index.ts`)

Replace the current neon green (`#09e063`) with **WhatsApp green** tones.

| Token | Value | Usage |
|---|---|---|
| `brand.primary` | `#25D366` | Primary CTAs, links, highlights |
| `brand.dark` | `#128C7E` | Hover states, secondary accents |
| `brand.light` | `#dcf8c6` | Subtle tints, incoming bubble bg |
| `surface.950` | `#0b0e0d` | Page background |
| `surface.900` | `#111714` | Card backgrounds |
| `surface.800` | `#1a2420` | Elevated surfaces |
| `surface.200` | `rgba(255,255,255,0.06)` | Border overlays |

### 1.2 Typography (`src/theme/index.ts`)

| Role | Font | Notes |
|---|---|---|
| `heading` | **Inter** (via Google Fonts) | Clean, modern, widely trusted |
| `body` | **Inter** | Consistent with heading |
| `mono` | **JetBrains Mono** | Used inside chat mockup code snippets |

Remove Syne, DM Sans, DM Mono from `layout.tsx` `<link>` tags and replace with Inter + JetBrains Mono.

### 1.3 Global Styles (`src/app/layout.tsx`)

- Update `<html lang="en">` → `<html lang="pt-BR">`
- Update `<Metadata>` title → `"Remind Me — Lembretes pelo WhatsApp"`, description → `"Crie lembretes no WhatsApp com linguagem natural. Sem app, sem cadastro complicado. R$ 4,90/mês."`
- Scrollbar accent → `#25D366`
- Body background → `#0b0e0d`

---

## 2. Page Structure

```
<Navbar />
<Hero />
<HowItWorks />
<Features />
<Pricing />
<Testimonials />
<FAQ />
<Footer />
```

Eight sections, each a separate file under `src/components/`.

---

## 3. Section-by-Section Specification

---

### 3.1 `Navbar.tsx` — Rewrite

**Layout:** `Flex` with `justify="space-between"` and `align="center"`, fixed/sticky with scroll-blur effect (keep existing Framer Motion `useScroll` logic).

**Left — Logo block:**
- A `Box` `w="36px" h="36px"` with rounded corners, background `linear-gradient(135deg, #25D366, #128C7E)`, containing a white WhatsApp speech-bubble icon (use an inline SVG `<path>` or a Unicode `💬` styled in white).
- Wordmark: `"remind me"` in `fontWeight="700"`, with `"me"` colored `brand.primary`.

**Center — Nav links (hidden on mobile, `display={{ base: "none", md: "flex" }}`):**
- `"Como funciona"` (scrolls to `#how-it-works`)
- `"Funcionalidades"` (scrolls to `#features`)
- `"Preços"` (scrolls to `#pricing`)
- `"FAQ"` (scrolls to `#faq`)

**Right — Actions:**
- Ghost `Button` `variant="ghost"` → `"Entrar"` (placeholder, no auth page yet)
- Solid `Button` with `bg="brand.primary"` → `"Começar grátis"` (scrolls to `#pricing`)

---

### 3.2 `Hero.tsx` — Full Rewrite

**Wrapper:** `Box` `minH="100vh"` `position="relative"`, vertically centered `Flex`.

**Background layers (absolutely positioned, no images):**
- Radial green glow: `Box` `position="absolute"` `top="15%" left="50%"` `transform="translate(-50%,-50%)"` `w="700px" h="700px"` `borderRadius="full"` `bg="radial-gradient(circle, rgba(37,211,102,0.12) 0%, transparent 65%)"` `pointerEvents="none"`.
- Dot grid: same technique as current Hero (repeating radial gradient mask, swapped to green dots).

**Two-column layout on desktop (`SimpleGrid columns={{ base: 1, lg: 2 }}`):**

**Left column — Copy (staggered Framer Motion `fadeUp` variants):**
1. Badge: `Badge` with a pulsing `Box` green dot + `"✓ 30 dias grátis de Premium"`.
2. Headline (`h1`, `fontSize={{ base: "3xl", md: "5xl", lg: "6xl" }}`):
   > Seus lembretes,  
   > **no WhatsApp** que  
   > você já usa.
   - `"no WhatsApp"` gets the green gradient treatment.
3. Subheadline (`Text fontSize="xl" color="whiteAlpha.700"`):
   > Sem baixar app. Sem cadastrar cartão. Só manda mensagem e pronto — o Remind Me cuida do resto.
4. CTA row (`HStack gap="4"`):
   - Primary `Button` large, green: `"Ativar agora — R$ 4,90/mês"`.
   - Ghost `Button` large: `"Ver como funciona ↓"` (anchor link).
5. Micro social proof (`HStack gap="2" mt="4"`):
   - 5 small avatar circles (CSS initials) + `"Mais de 500 usuários ativos no Brasil"`.

**Right column — WhatsApp Chat Mockup:**

A `Box` styled as a phone frame (`borderRadius="24px"`, `border="6px solid"`, `borderColor="whiteAlpha.200"`, `bg="#111"`, `maxW="320px"`, `mx="auto"`):

- **Header bar**: `Flex` with a green circle (avatar) + `"Remind Me"` bold + `"online"` green dot. Mirrors a WhatsApp chat header.
- **Messages area** (`VStack align="stretch" p="3" gap="2"`): Hardcoded chat bubbles showing a real usage flow:
  - `[user]` `"Me lembre de tomar vitamina todo dia às 8h"` — right-aligned dark bubble.
  - `[bot]` `"✅ Feito! Vou te lembrar de tomar vitamina todos os dias às 8h 💊"` — left-aligned green-tinted bubble (`bg="rgba(37,211,102,0.12)"`).
  - `[user]` `"Me lembre de reunião amanhã às 14h"` — right-aligned.
  - `[bot]` `"⏰ Hora do: reunião!"` (simulated delivered reminder) — left-aligned, lighter style.
- **Input bar**: `Flex` `bg="surface.800"` with a rounded `Input` placeholder `"Digite uma mensagem"` + a green send icon `Button`.

All bubbles use `borderRadius="12px"`, `p="2 3"`, `fontSize="sm"`, `maxW="85%"`.
Animate with Framer Motion `initial={{ opacity:0, y:20 }}` staggered per bubble (`delay` increments of 0.15s) using `whileInView`.

---

### 3.3 `HowItWorks.tsx` — New Component

**ID:** `id="how-it-works"`

**Heading block (centered):**
- Section label: `Text` `"COMO FUNCIONA"` small caps, `brand.primary`, `letterSpacing="widest"`.
- `Heading` → `"Três passos. Só isso."`.
- `Text` subtext → `"Não tem app pra baixar, não tem formulário pra preencher."`.

**Three-step visual (`SimpleGrid columns={{ base: 1, md: 3 }}`):**

Each step is a `VStack` card with:
- Step number circle: `Circle size="48px"` with gradient background + bold number.
- Connector arrow between steps (on desktop): an absolutely-positioned `Box` with `border-top: 2px dashed brand.primary`, hidden on mobile.
- Icon: large emoji in a `Box` `fontSize="3xl"`.
- Title `Heading size="md"`.
- Description `Text`.

| Step | Icon | Title | Description |
|---|---|---|---|
| 1 | 💬 | Manda uma mensagem | Escreve para o número do Remind Me no WhatsApp, em português, do jeito que você falar. |
| 2 | 🤖 | A IA entende | O bot usa inteligência artificial para identificar o que você quer lembrar, quando e com que frequência. |
| 3 | 🔔 | Você recebe na hora certa | Na data e hora marcadas, o Remind Me manda a notificação direto no seu WhatsApp. |

---

### 3.4 `Features.tsx` — Rewrite Content, Keep Layout

Keep the `SimpleGrid columns={{ base: 1, md: 2, lg: 3 }}` and `whileInView` card animation. Replace all 6 cards with Remind Me features:

| # | Icon | Tag | Title | Description |
|---|---|---|---|---|
| 1 | 🗣️ | Linguagem natural | Fale como você fala | Sem comandos especiais. "Me lembra de ligar pra mãe sexta às 18h" já funciona. |
| 2 | 🔁 | Recorrência | Lembretes que se repetem | Diário, semanal, mensal, só dias úteis, só fim de semana — você escolhe a frequência. |
| 3 | ⏩ | Adiar | Adiar com uma palavra | Responde "amanhã" ou "30 minutos" direto na notificação. O bot reagenda na hora. |
| 4 | 📋 | Gerenciar | Lista e exclui fácil | Manda "listar" pra ver tudo. Manda "apagar 2" ou responde a mensagem com "deletar". |
| 5 | ⚡ | Respostas rápidas | Parece uma conversa real | Indicador de digitação, reações de emoji (✅ 🗑️ 🚫) e confirmações em PT-BR. |
| 6 | 🔒 | Privacidade | Só seu número, nada mais | Nenhum dado pessoal além do número do WhatsApp é necessário para criar uma conta. |

Card style: same hover lift (`transform: translateY(-4px)`) and green border glow on hover. Keep `whiteAlpha.800` border at rest.

---

### 3.5 `Pricing.tsx` — Rewrite Content

Keep the three-card `SimpleGrid` layout. New plans:

**Card 1 — Grátis**
- Price: `R$ 0`
- Subtitle: `"Para experimentar"`
- Features:
  - ✅ Até 5 lembretes ativos
  - ✅ Até 5 interações com IA por dia
  - ✅ 30 dias de Premium grátis ao se cadastrar
  - ❌ Lembretes ilimitados
  - ❌ IA ilimitada
- CTA: ghost `Button` → `"Começar grátis"`

**Card 2 — Premium** *(highlighted — green border, glow, "Mais popular" badge)*
- Price: `R$ 4,90 / mês`
- Subtitle: `"Para quem usa de verdade"`
- Features:
  - ✅ Lembretes ilimitados
  - ✅ Interações com IA ilimitadas
  - ✅ Adiar, listar e excluir sem restrições
  - ✅ Suporte via WhatsApp
  - ✅ Ativação automática após pagamento
- CTA: green gradient `Button` → `"Assinar por R$ 4,90/mês"`
- Note below button: `Text fontSize="xs" color="whiteAlpha.500"` → `"Cancele quando quiser. Sem fidelidade."`

**Card 3 — Equipes** *(future / locked)*
- Price: `"Em breve"`
- Subtitle: `"Para grupos e empresas"`
- Features dimmed with `opacity="0.5"`:
  - 🔜 Múltiplos usuários
  - 🔜 Lembretes para grupos
  - 🔜 Painel de administração
  - 🔜 Integrações via API
- CTA: disabled ghost `Button` → `"Entrar na lista de espera"`

Add a `Text` note centered below all three cards:
> 💳 O pagamento é feito via link seguro enviado pelo próprio bot no WhatsApp.

---

### 3.6 `Testimonials.tsx` — Rewrite Content

Keep 3-card `SimpleGrid`. All 3 testimonials are fictional Brazilian users.

| Avatar | Name | Role | Quote |
|---|---|---|---|
| `MC` | Mariana Costa | Freelancer, SP | *"Eu usava alarmes no celular pra tudo. Agora mando uma mensagem pro Remind Me e esqueço. Ele lembra por mim."* |
| `RF` | Rafael Ferreira | Estudante de medicina, RJ | *"Lembro de tomar medicação todos os dias graças ao bot. 30 dias grátis já me convenceram a assinar."* |
| `AL` | Ana Luiza | Empreendedora, BH | *"R$ 4,90 por mês pelo tempo que eu economizo? Fechado na hora."* |

Star row: 5 × `Box` `w="14px" h="14px"` `bg="brand.primary"` `borderRadius="2px"` (solid squares, not Unicode stars, to avoid font rendering issues).

---

### 3.7 `FAQ.tsx` — New Component

**ID:** `id="faq"`

Use Chakra UI's `Accordion` component (`allowMultiple={false}`).

**Items:**

1. **Preciso baixar algum app?**
   > Não. O Remind Me funciona 100% pelo WhatsApp que você já tem instalado. Nenhum download necessário.

2. **Como me cadastro?**
   > Só mandar qualquer mensagem para o número do Remind Me. Sua conta é criada automaticamente pelo número do WhatsApp.

3. **Posso cancelar o Premium a qualquer hora?**
   > Sim. Basta parar de renovar. Não há fidelidade, contratos ou multas.

4. **O que acontece quando atinjo o limite grátis?**
   > O bot te avisa e envia um link de pagamento. Após pagar, a ativação é automática — o bot confirma no WhatsApp em segundos.

5. **Meus lembretes são seguros?**
   > Guardamos apenas seu número de WhatsApp e os textos dos lembretes. Nenhuma informação financeira é processada pelo bot — o pagamento passa por uma plataforma segura externa.

6. **Funciona para lembretes recorrentes?**
   > Sim. Você pode criar lembretes diários, semanais, mensais, só em dias úteis, só no fim de semana, e mais.

Style: `AccordionItem` with `borderColor="whiteAlpha.100"`, question in `AccordionButton` `fontWeight="600"`, answer in `AccordionPanel` `color="whiteAlpha.700"`.

---

### 3.8 `Footer.tsx` — Rewrite Content

**CTA Banner (top of footer):**
- Container: `Box` with `border="1px solid"` `borderColor="whiteAlpha.200"` `borderRadius="2xl"`, green radial glow inside.
- Headline: `"Pronto pra nunca mais esquecer nada?"`
- Subtext: `"Começar é grátis. Basta mandar uma mensagem."`
- CTA `Button` → `"Ativar o Remind Me agora"` (green).

**Footer columns:**
- **Brand column (left):** Logo + `"remind me"` wordmark + tagline `"Lembretes pelo WhatsApp. Do jeito que você fala."`.
- **Produto (center-left):** Como funciona, Funcionalidades, Preços, FAQ.
- **Empresa (center-right):** Sobre, Blog (coming soon), Termos de uso, Privacidade.
- **Contato (right):** `"Fale pelo WhatsApp"` (placeholder link).

**Bottom bar:** `"© 2025 Remind Me. Feito com 💚 no Brasil."` | `"Não somos afiliados ao WhatsApp ou Meta."`

---

## 4. Files to Create / Modify

| Action | File | Change |
|---|---|---|
| Modify | `src/app/layout.tsx` | lang, metadata, fonts (Inter + JetBrains Mono), scrollbar color |
| Modify | `src/app/page.tsx` | Import new sections, replace Synapse order with Remind Me order |
| Modify | `src/theme/index.ts` | New color tokens (WhatsApp green), updated font tokens |
| Rewrite | `src/components/Navbar.tsx` | New logo, links, copy |
| Rewrite | `src/components/Hero.tsx` | New headline, subheadline, WhatsApp mockup |
| Create | `src/components/HowItWorks.tsx` | New 3-step section |
| Rewrite | `src/components/Features.tsx` | New 6 feature cards |
| Rewrite | `src/components/Pricing.tsx` | New 3 plans (Grátis / Premium / Equipes) |
| Rewrite | `src/components/Testimonials.tsx` | New Brazilian user testimonials |
| Create | `src/components/FAQ.tsx` | New Accordion FAQ section |
| Rewrite | `src/components/Footer.tsx` | New CTA banner, Remind Me links, PT-BR copy |

---

## 5. Chakra UI Component Map

| Section | Chakra Components Used |
|---|---|
| Navbar | `Flex`, `HStack`, `Button`, `Box`, `Text` |
| Hero | `SimpleGrid`, `VStack`, `HStack`, `Box`, `Badge`, `Heading`, `Text`, `Button`, `Circle` |
| HowItWorks | `VStack`, `SimpleGrid`, `Box`, `Circle`, `Heading`, `Text` |
| Features | `SimpleGrid`, `VStack`, `Box`, `Badge`, `Heading`, `Text` |
| Pricing | `SimpleGrid`, `VStack`, `Box`, `Badge`, `Heading`, `Text`, `Button`, `List`, `ListItem`, `Icon` |
| Testimonials | `SimpleGrid`, `VStack`, `HStack`, `Box`, `Text`, `Circle` |
| FAQ | `Accordion`, `AccordionItem`, `AccordionButton`, `AccordionPanel`, `AccordionIcon`, `Box`, `Heading` |
| Footer | `Box`, `Flex`, `Grid`, `VStack`, `HStack`, `Button`, `Text`, `Link` |

---

## 6. Animations (Framer Motion)

All existing animation patterns are reused and extended:

| Pattern | Where |
|---|---|
| `fadeUp` stagger on mount | Hero headline, subtext, CTAs |
| `whileInView` fade+slide | HowItWorks steps, Feature cards, Testimonials, FAQ |
| Staggered chat bubble entrance | Hero phone mockup (delay per bubble) |
| Scroll-based navbar blur | Navbar (existing logic kept) |
| Hover lift on cards | Feature cards, Pricing cards, Testimonials |
| Pulsing green dot | Hero badge, Navbar logo |

---

## 7. Conversion Optimisation Notes

- **Single primary CTA per viewport**: Each section has at most one primary green button. Secondary actions are ghost style to reduce visual competition.
- **Free trial anchor**: The `"30 dias grátis de Premium"` message appears in the Hero badge, Pricing Grátis card, and FAQ item 2 — three touches before the bottom CTA.
- **Price anchoring**: The "Equipes — Em breve" card makes R$ 4,90 feel like the obvious, affordable middle choice.
- **Objection handling in FAQ**: Questions 1–3 directly address the three most common objections (no app, no signup friction, no lock-in).
- **Social proof layering**: Micro social proof in Hero (`"500+ usuários ativos"`), full testimonials section later, real quotes with role + city.
- **WhatsApp native feel**: The Hero chat mockup uses real message examples so visitors immediately picture themselves using the product with zero mental effort.

---

## 8. Implementation Todo List

Work through these tasks in order. Each task is self-contained and can be committed individually. Dependencies are noted where they exist.

---

### Phase 1 — Foundation (do this first; everything else depends on it) ✅

- [x] **1.1** Open `src/theme/index.ts`. Replace the entire `brand` color scale with WhatsApp greens:
  - `primary: "#25D366"`, `dark: "#128C7E"`, `light: "#dcf8c6"`, plus keep a full 50–900 scale derived from those anchors.
  - Replace the `surface` scale base from `#07060d` to `#0b0e0d` and tint slightly toward green.
  - Update `fonts.heading` and `fonts.body` from `Syne` / `DM Sans` to `Inter`.
  - Update `fonts.mono` from `DM Mono` to `JetBrains Mono`.

- [x] **1.2** Open `src/app/layout.tsx`. Make these changes:
  - Set `<html lang="pt-BR">`.
  - Replace Google Fonts `<link>` tags: load `Inter` (weights 400, 500, 600, 700) and `JetBrains Mono` (weight 400).
  - Update `metadata.title` → `"Remind Me — Lembretes pelo WhatsApp"`.
  - Update `metadata.description` → `"Crie lembretes no WhatsApp com linguagem natural. Sem app, sem cadastro. R$ 4,90/mês."`.
  - In the inline `<style>` block, update the scrollbar accent color to `#25D366` and the body background to `#0b0e0d`.

- [x] **1.3** Open `src/app/page.tsx`. Update the import list to match the new section order:
  ```
  Navbar → Hero → HowItWorks → Features → Pricing → Testimonials → FAQ → Footer
  ```
  Add imports for `HowItWorks` and `FAQ` (the two new components). Remove nothing yet — just add placeholders so the file compiles once those files exist.

---

### Phase 2 — Navbar ✅

- [x] **2.1** Open `src/components/Navbar.tsx`. Replace the logo block:
  - Remove the green-square icon and "synapse" wordmark.
  - Add a `Box` `w="36px" h="36px"` `borderRadius="10px"` with `background="linear-gradient(135deg, #25D366, #128C7E)"` containing a white speech-bubble SVG icon (inline `<svg>` with a simple `<path>` for a chat bubble, or use the Unicode `💬` character in `color="white" fontSize="xl"`).
  - Add the wordmark: `"remind "` in `fontWeight="700" color="white"` followed by `"me"` in `color="brand.primary"`.

- [x] **2.2** In the same file, replace the nav link labels and their `href` anchor targets:
  - `"Features"` → `"Como funciona"` → `href="#how-it-works"`
  - `"Pricing"` → `"Funcionalidades"` → `href="#features"`
  - `"Docs"` → `"Preços"` → `href="#pricing"`
  - `"Blog"` → `"FAQ"` → `href="#faq"`

- [x] **2.3** Replace the right-side button labels:
  - Ghost button: `"Sign in"` → `"Entrar"`.
  - Primary button: `"Get started free"` → `"Começar grátis"`, add `onClick` or `as="a" href="#pricing"`.

---

### Phase 3 — Hero ✅

- [x] **3.1** Open `src/components/Hero.tsx`. Change the section wrapper from single-column to `SimpleGrid columns={{ base: 1, lg: 2 }} gap="12"`. Keep the existing background layers (dot grid + radial glow) but update the glow color to `rgba(37,211,102,0.12)`.

- [x] **3.2** Left column — replace all copy:
  - Badge text: `"✓ 30 dias grátis de Premium"` (keep pulsing green dot animation).
  - `h1`: `"Seus lembretes,\nno WhatsApp que\nvocê já usa."` — wrap `"no WhatsApp"` in a `<span>` with `bgGradient="linear(to-r, #25D366, #128C7E)"` + `bgClip="text"`.
  - Subheadline: `"Sem baixar app. Sem cadastrar cartão. Só manda mensagem e pronto — o Remind Me cuida do resto."`.
  - Remove the "Trusted by" logos row entirely.
  - CTA primary button: `"Ativar agora — R$ 4,90/mês"`.
  - CTA ghost button: `"Ver como funciona ↓"` with `as="a" href="#how-it-works"`.
  - Add a micro social proof `HStack` below the buttons: 5 small `Circle` avatars (initials `MC`, `RF`, `AL`, `JB`, `TS`, each `size="32px"` with brand green gradient) overlapping via negative margin, followed by `Text` `"500+ usuários ativos no Brasil"` `fontSize="sm"` `color="whiteAlpha.600"`.

- [x] **3.3** Right column — replace the mock browser dashboard with a WhatsApp chat phone mockup:
  - Outer `Box`: `borderRadius="24px"` `border="6px solid" borderColor="whiteAlpha.200"` `bg="#111"` `maxW="320px"` `mx="auto"` `overflow="hidden"`.
  - **Header bar** (`Flex align="center" gap="3" p="3" bg="surface.900" borderBottom="1px solid" borderColor="whiteAlpha.100"`):
    - Green `Circle size="36px"` with white `"R"` initial.
    - `VStack gap="0" align="start"`: `Text fontWeight="700" fontSize="sm"` `"Remind Me"` + `HStack gap="1"`: tiny green `Circle size="6px"` + `Text fontSize="xs" color="brand.primary"` `"online"`.
  - **Messages area** (`VStack align="stretch" p="3" gap="2" bg="#0b0e0d" minH="280px"`): render 4 chat bubbles as `Box` components:
    - Bubble 1 (user): `alignSelf="flex-end"` `bg="rgba(255,255,255,0.08)"` — `"Me lembre de tomar vitamina todo dia às 8h"`.
    - Bubble 2 (bot): `alignSelf="flex-start"` `bg="rgba(37,211,102,0.12)"` — `"✅ Feito! Vou te lembrar de tomar vitamina todos os dias às 8h 💊"`.
    - Bubble 3 (user): `alignSelf="flex-end"` — `"Me lembre de reunião amanhã às 14h"`.
    - Bubble 4 (bot, simulated delivery): `alignSelf="flex-start"` `bg="rgba(37,211,102,0.08)"` — `"⏰ Hora do: reunião!"`.
    - Each bubble: `borderRadius="12px"` `px="3" py="2"` `fontSize="sm"` `maxW="85%"` `color="whiteAlpha.900"`.
    - Wrap each bubble in a Framer Motion `motion.div` with `initial={{ opacity:0, y:10 }}` `animate={{ opacity:1, y:0 }}` and `transition={{ delay: 0.3 * index }}`.
  - **Input bar** (`Flex align="center" gap="2" p="3" bg="surface.900" borderTop="1px solid" borderColor="whiteAlpha.100"`):
    - `Input variant="filled" placeholder="Digite uma mensagem" fontSize="sm" bg="whiteAlpha.100" borderRadius="full"`.
    - `IconButton` `bg="brand.primary"` `borderRadius="full"` `aria-label="send"` with a right-arrow or send SVG icon.

---

### Phase 4 — HowItWorks (new file) ✅

- [x] **4.1** Create `src/components/HowItWorks.tsx`. Mark it `"use client"`. Add `id="how-it-works"` to the section wrapper `Box`.

- [x] **4.2** Build the heading block (centered `VStack`):
  - `Text` `"COMO FUNCIONA"` `fontSize="xs"` `fontWeight="700"` `letterSpacing="widest"` `color="brand.primary"`.
  - `Heading` `"Três passos. Só isso."` `textAlign="center"`.
  - `Text` `"Não tem app pra baixar, não tem formulário pra preencher."` `color="whiteAlpha.600"` `textAlign="center"` `maxW="480px"`.

- [x] **4.3** Build the 3-step `SimpleGrid columns={{ base: 1, md: 3 }} gap="8"`. For each step card:
  - `VStack` `align="center"` `textAlign="center"` `gap="4"`.
  - Step number: `Circle size="48px"` `bg="linear-gradient(135deg, #25D366, #128C7E)"` containing `Text fontWeight="800" color="white"` with the number.
  - Emoji icon: `Text fontSize="4xl"`.
  - `Heading size="md"`.
  - `Text color="whiteAlpha.700" fontSize="sm"`.
  - Wrap each card in `motion.div` with `whileInView={{ opacity:1, y:0 }}` `initial={{ opacity:0, y:24 }}` `transition={{ delay: 0.15 * index }}`.

- [x] **4.4** Add the dashed connector arrows between steps on desktop:
  - Inside the `SimpleGrid`, after steps 1 and 2, render a `Box` `display={{ base:"none", md:"block" }}` absolutely positioned or use a separator with `borderTop="2px dashed"` `borderColor="brand.primary"` `opacity="0.3"` `w="60px"` `mt="24px"`.
  - Simplest approach: make the grid `position="relative"` and add two `Box` elements with `position="absolute"` `top="24px"` at `left="33%"` and `left="66%"`.

---

### Phase 5 — Features ✅

- [x] **5.1** Open `src/components/Features.tsx`. Replace the section heading:
  - Label: `"FUNCIONALIDADES"`.
  - `Heading`: `"Tudo que você precisa, nada que você não precisa."`.
  - Subtext: `"Funcionalidades pensadas para quem vive no WhatsApp."`.

- [x] **5.2** Replace the `features` array with the 6 Remind Me entries (see Section 3.4 of this plan). Keep the existing card render loop — only the data changes.

- [x] **5.3** Add `id="features"` to the section wrapper `Box`.

---

### Phase 6 — Pricing ✅

- [x] **6.1** Open `src/components/Pricing.tsx`. Replace the section heading:
  - Label: `"PREÇOS"`.
  - `Heading`: `"Simples. Transparente. Barato."`.
  - Subtext: `"Comece grátis. Assine quando quiser."`.

- [x] **6.2** Replace the `plans` array with the 3 Remind Me plans (Grátis / Premium / Equipes). Keep the existing card render loop.
  - Mark `plans[1]` (Premium) as `highlighted: true` — this preserves the green border + glow + badge logic already in the component.
  - For the "Equipes" card, add `opacity="0.6"` to the card `Box` and `isDisabled` to the CTA `Button`.

- [x] **6.3** Below the `SimpleGrid`, add a centered `Text` note: `"💳 O pagamento é feito via link seguro enviado pelo próprio bot no WhatsApp."` `fontSize="sm"` `color="whiteAlpha.500"` `mt="8"`.

- [x] **6.4** Add `id="pricing"` to the section wrapper `Box`.

---

### Phase 7 — Testimonials ✅

- [x] **7.1** Open `src/components/Testimonials.tsx`. Replace the section heading:
  - Label: `"DEPOIMENTOS"`.
  - `Heading`: `"Quem usa, recomenda."`.

- [x] **7.2** Replace the `testimonials` array with the 3 Brazilian users (see Section 3.6 of this plan). Keep the existing card render loop.

- [x] **7.3** Replace the 5 Unicode `★` stars with 5 `Box` elements (`w="12px" h="12px"` `bg="brand.primary"` `borderRadius="2px"` `display="inline-block"`). This avoids star-rendering inconsistencies across OS/browsers.

---

### Phase 8 — FAQ (new file) ✅

- [x] **8.1** Create `src/components/FAQ.tsx`. Mark it `"use client"`. Add `id="faq"` to the section wrapper.

- [x] **8.2** Build the heading block (same pattern as HowItWorks):
  - Label: `"DÚVIDAS FREQUENTES"`.
  - `Heading`: `"Perguntas que todo mundo faz."`.

- [x] **8.3** Build the `Accordion.Root collapsible` with 6 `Accordion.Item` entries (Chakra v3 API):
  - `Accordion.Item borderColor="whiteAlpha.100"`.
  - `Accordion.ItemTrigger _hover={{ bg:"whiteAlpha.50" }} py="4"`:
    - `Box flex="1" textAlign="left" fontWeight="600"` — question text.
    - `Accordion.ItemIndicator color="brand.primary"`.
  - `Accordion.ItemContent > Accordion.ItemBody` — answer text.

- [x] **8.4** Wrap the entire `Accordion` in a `Box maxW="680px" mx="auto"` to keep it readable on wide screens.

- [x] **8.5** Wrap the `Accordion` in a Framer Motion `motion.div` with `whileInView={{ opacity:1 }}` `initial={{ opacity:0 }}` `transition={{ duration:0.4 }}`.

---

### Phase 9 — Footer ✅

- [x] **9.1** Open `src/components/Footer.tsx`. Replace the CTA banner content:
  - `Heading`: `"Pronto pra nunca mais esquecer nada?"`.
  - Subtext: `"Começar é grátis. Basta mandar uma mensagem."`.
  - CTA `Button`: `"Ativar o Remind Me agora"`.

- [x] **9.2** Replace the footer columns content:
  - Left: new logo + wordmark (`"remind me"`) + tagline `"Lembretes pelo WhatsApp.\nDo jeito que você fala."`.
  - Column 1 `"Produto"`: links → Como funciona, Funcionalidades, Preços, FAQ.
  - Column 2 `"Empresa"`: links → Sobre, Blog *(em breve)*, Termos de uso, Privacidade.
  - Column 3 `"Contato"`: single link → `"Falar pelo WhatsApp"`.

- [x] **9.3** Replace the copyright line: `"© 2025 Remind Me. Feito com 💚 no Brasil."` with a second line `"Não somos afiliados ao WhatsApp ou Meta."` in `color="rgba(255,255,255,0.3)" fontSize="xs"`.

---

### Phase 10 — Wiring & QA ✅

- [x] **10.1** Open `src/app/page.tsx`. Confirm all 8 imports are present and the render order is:
  ```tsx
  <Navbar />
  <Hero />
  <HowItWorks />
  <Features />
  <Pricing />
  <Testimonials />
  <FAQ />
  <Footer />
  ```

- [x] **10.2** Visual check deferred to user — `npm run dev` ready for manual review.

- [x] **10.3** All anchor scroll links (`#how-it-works`, `#features`, `#pricing`, `#faq`) wired in Navbar + Footer.

- [x] **10.4** Navbar scroll-blur animation preserved — uses same `useScroll`/`useTransform` pattern, colors updated.

- [x] **10.5** `npm run build` passed with zero TypeScript and build errors. `tsc --noEmit` clean.
