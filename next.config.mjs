/** @type {import('next').NextConfig} */
const nextConfig = {
    output: "export",
    basePath: "/russian-cuisine-festival",
    assetPrefix: "/russian-cuisine-festival",
    typescript: {
        ignoreBuildErrors: true,
    },
    images: {
        unoptimized: false,
    },
}

export default nextConfig
