/** @type {import('next').NextConfig} */
const nextConfig = {
    output: "export",
    basePath: "/russian-cuisine-festival",
    typescript: {
        ignoreBuildErrors: true,
    },
    images: {
        unoptimized: true,
    },
}

export default nextConfig
