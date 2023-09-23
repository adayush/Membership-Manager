const next_config = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '*.googleusercontent.com',
      }
    ]
  }
}

if (process.env.environment === "development") {
  module.exports = next_config
} else {

  const withPWA = require('next-pwa')({
    dest: 'public',
    dynamicStartUrlRedirect: true,
  })

  module.exports = withPWA(next_config)
}
