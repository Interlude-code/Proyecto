/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    dangerouslyAllowSVG: true,
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
  },
  env:{
    NEXT_PUBLIC_DB_KEY : process.env.NEXT_PUBLIC_DB_KEY
  }
}

module.exports = nextConfig
