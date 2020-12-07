const path = require('path');
const withOffline = require('next-offline');

module.exports = withOffline({
  workboxOpts: {
    swDest: process.env.NEXT_EXPORT
      ? 'service-worker.js'
      : 'static/service-worker.js',
    runtimeCaching: [
      {
        urlPattern: /^https?.*/,
        handler: 'NetworkFirst',
        options: {
          cacheName: 'offlineCache',
          expiration: {
            maxEntries: 200,
          },
        },
      },
    ],
  },
  webpack(config) {
    config.resolve.alias.client = path.join(__dirname, 'src/client');
    config.resolve.alias.atoms = path.join(__dirname, 'src/client/components/atoms');
    config.resolve.alias.molecules = path.join(__dirname, 'src/client/components/molecules');
    config.resolve.alias.organisms = path.join(__dirname, 'src/client/components/organisms');
    config.resolve.alias.templates = path.join(__dirname, 'src/client/components/templates');
    config.resolve.alias.providers = path.join(__dirname, 'src/client/providers');
    config.resolve.alias.actions = path.join(__dirname, 'src/client/redux/actions');
    config.resolve.alias.reducers = path.join(__dirname, 'src/client/redux/reducers');
    config.resolve.alias.config = path.join(__dirname, 'config');
    config.resolve.alias.utils = path.join(__dirname, 'src/utils');
    return config;
  },
  devIndicators: {
    autoPrerender: false,
  },
});
