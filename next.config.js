/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "standalone",
  // Configuração para permitir recursos estáticos grandes
  experimental: {
    largePageDataBytes: 128 * 100000, // Aumenta o limite para dados grandes
  },
  // Configuração para otimização de imagens/vídeos
  images: {
    unoptimized: true, // Desativa a otimização automática de imagens para compatibilidade com AR.js
  },
  // Configuração para headers de segurança
  async headers() {
    return [
      {
        source: "/:path*",
        headers: [
          {
            key: "Cross-Origin-Embedder-Policy",
            value: "require-corp",
          },
          {
            key: "Cross-Origin-Opener-Policy",
            value: "same-origin",
          },
        ],
      },
    ];
  },
};

module.exports = nextConfig;
