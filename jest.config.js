module.exports = {
  testEnvironment: 'node',
  verbose: true,
  projects: [
    {
      displayName: 'kinobox',
      testMatch: ['<rootDir>/packages/kinobox/src/**/*.test.js'],
    },
    {
      displayName: 'csfd',
      testMatch: ['<rootDir>/packages/csfd/src/**/*.test.js'],
    },
  ],
};
