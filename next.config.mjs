/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    // Add the 'experimental' and 'turbopack' properties
    experimental: {
        turbopack: {
        resolveAlias: {
            'three': 'three/build/three.module.js',
        },
        },
    },
};

export default nextConfig;
