/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    optimizePackageImports: ["lucide-react"],
  },
  output: "standalone",
};

export default nextConfig;
