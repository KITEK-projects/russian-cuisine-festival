/** @type {import('next').NextConfig} */
const nextConfig = {
    output: "export",
    typescript: {
        ignoreBuildErrors: true,
    },
    images: {
        unoptimized: false,
    },
    trailingSlash: true,
}

export default nextConfig
