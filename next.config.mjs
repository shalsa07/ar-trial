/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    webpack: (config) => {
        // This is the new, correct way to add the alias
        config.resolve.alias.three = 'three/build/three.module.js';
        return config;
    },
};

export default nextConfig;
