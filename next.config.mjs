/** @type {import('next').NextConfig} */
export default {
    experimental: {
        appDir: true,
        serverComponentsExternalPackages: ["mongoose"],
    },
    images: {
        domains: ['occ-0-3933-116.1.nflxso.net']
    }
}
