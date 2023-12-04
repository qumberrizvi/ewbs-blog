/** @type {import('next').NextConfig} */
const nextConfig = {
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
