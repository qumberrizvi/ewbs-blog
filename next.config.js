/** @type {import('next').NextConfig} */
const nextConfig = {
    basePath: '/blog',
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: '*ewbsbusiness.ae',
                port: '',
                pathname: '/**',
            },
        ],
    },
}

module.exports = nextConfig
