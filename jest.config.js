const { defaults } = require('jest-config');

module.exports = {
  // ...
  moduleFileExtensions: [...defaults.moduleFileExtensions, 'ts', 'tsx'],
  // ...
  moduleNameMapper: {
    '^.+\\.svg$': '<rootDir>/src/__mocks__/svgMock.js',
  },

  setupFiles: [
    './src/__mocks__/client.js',
  ],
};
