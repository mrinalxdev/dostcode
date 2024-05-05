/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode : false,
    images : {
        remotePatterns : [
            {
                protocol : 'https',
                hostname : 'ap-south-1.graphassets.com',
                port : ''
            }
        ]
    }
};

export default nextConfig;
