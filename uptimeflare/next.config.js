/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
}

module.exports = nextConfig

if (process.env.NODE_ENV === 'development') {
  const { setupDevBindings } = require('@cloudflare/next-on-pages/next-dev')
  setupDevBindings({
    bindings: {
      UPTIMEFLARE_STATE: {
        type: 'kv',
        id: '38bc5e9f491b4454913d5cd661266af7',
      },
    },
  })
}
