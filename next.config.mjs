/** @type {import('next').NextConfig} */
const nextConfig = {
  reactCompiler: true,

  async redirects() {
    return [
      {
        source: "/:path*",
        has: [
          {
            type: "host",
            value: "anildjevents.in",
          },
        ],
        destination: "https://www.anildjevents.in/:path*",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;