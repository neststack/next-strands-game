/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        hostname: "www.nytimes.com",
        pathname: "/games-assets/images/strands/**",
        protocol: "https"
      }
    ]
  }
};

export default nextConfig;
