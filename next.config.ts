import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  sassOptions: {
    additionalData: `@use "src/share/styles/index" as *;`,
    implementation: 'sass',
  },
};

export default nextConfig;
