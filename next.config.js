const withPWA = require('next-pwa')({
  dest: 'public',
  dynamicStartUrlRedirect: true,
})

module.exports = withPWA({
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '*.googleusercontent.com',
      }
    ]
  }
})