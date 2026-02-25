/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    // 1. Solución al error de calidad: permite usar quality={100}
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    
    // 2. Cambiamos domains (deprecado) por remotePatterns
    remotePatterns: [
      { protocol: 'https', hostname: 'utfs.io' },
      { protocol: 'https', hostname: 'img.clerk.com' },
      { protocol: 'https', hostname: 'images.unsplash.com' },
      { protocol: 'https', hostname: 'homely-nextjs-tailwind.vercel.app' },
      { protocol: 'https', hostname: 'grupocampana.ec' },
      { protocol: 'https', hostname: 'cdn.magicui.design'},
      { protocol: 'https', hostname: 'player.vimeo.com'},
      { protocol: 'https', hostname: 'vimeo.com'},
      { protocol: 'https', hostname: 'youtube.com'},
      { protocol: 'https', hostname: 'assets.aceternity.com'}
    ],
  },
  reactStrictMode: false,
};

export default nextConfig;