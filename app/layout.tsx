import "./globals.css";

import type { Metadata } from "next";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Template Next.js com Tailwindcss v4",
  description: "Este é um template para o Next.js com Tailwindcss v4.",
  authors: {
    name: "Leandro Rodrigues",
    url: "https://leandro-dev.vercel.app",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body className={`${inter.className}`}>{children}</body>
    </html>
  );
}
