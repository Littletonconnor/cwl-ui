/** @type {import('next').NextConfig} */
module.exports = {
  transpilePackages: ['cwl-ui'],
  redirects() {
    return [
      {
        source: '/docs/components',
        destination: '/docs/components/breadcrumbs',
        permanent: true,
      },
      {
        source: '/getting-started',
        destination: '/getting-started/introduction',
        permanent: true,
      },
    ]
  },
}
