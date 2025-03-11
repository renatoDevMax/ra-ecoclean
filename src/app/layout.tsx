import type { Metadata } from "next";
import "./globals.css";
import Script from "next/script";

export const metadata: Metadata = {
  title: "Projeto Realidade Aumentada",
  description: "Projeto de Realidade Aumentada com Next.js",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body style={{ margin: 0, overflow: "hidden" }}>
        <Script src="https://aframe.io/releases/1.4.0/aframe.min.js" />
        <Script src="https://raw.githack.com/AR-js-org/AR.js/master/aframe/build/aframe-ar.js" />
        {children}
      </body>
    </html>
  );
}
