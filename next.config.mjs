/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["placehold.co"],
  },
  experimental: {
    // Disable the default security mechanisms for SVGs in Next.js 13
    // This is necessary because we use external SVGs that are not sanitized
    // by Cloudflare Access
    dangerouslyAllowSVG: true,
  },
};

export default nextConfig;
