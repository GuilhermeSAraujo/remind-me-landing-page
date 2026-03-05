import type { Metadata } from "next";
import { Providers } from "./providers";

export const metadata: Metadata = {
  title: "Remind Me - Lembretes no WhatsApp",
  description:
    "Crie lembretes no WhatsApp com linguagem natural. Sem app, sem cadastro. R$ 4,90/mês.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <head>
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&family=JetBrains+Mono:wght@400;500&display=swap"
          rel="stylesheet"
        />
        <style>{`
          *, *::before, *::after { box-sizing: border-box; }
          html { scroll-behavior: smooth; }
          body {
            margin: 0;
            background: #0b0e0d;
            color: #f5f6f5;
            font-family: 'Inter', sans-serif;
            -webkit-font-smoothing: antialiased;
          }
          ::selection { background: #25D366; color: #0b0e0d; }
          ::-webkit-scrollbar { width: 6px; }
          ::-webkit-scrollbar-track { background: #111714; }
          ::-webkit-scrollbar-thumb { background: #25D366; border-radius: 3px; }
        `}</style>
      </head>
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
