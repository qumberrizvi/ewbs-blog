/** @type {import('next').NextConfig} */
const nextConfig = {
    basePath: '/blog',
    trailingSlash: false,
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: '*ewbsbusiness.ae',
                port: '',
                pathname: '/**',
            },
            {
                protocol: 'https',
                hostname: 'ewbsbusiness.ae',
                port: '',
                pathname: '/**',
            },
        ],
        domains: ['ewbsbusiness.ae', '*ewbsbusiness.ae']
    },
}

module.exports = nextConfig
