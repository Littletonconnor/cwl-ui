/** @type {import('next').NextConfig} */
module.exports = {
  transpilePackages: ['cwl-ui'],
  redirects() {
    return [
      {
        source: '/',
        destination: '/docs/avatar',
        permanent: true,
      },
    ]
  },
}
