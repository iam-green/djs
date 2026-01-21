module.exports = {
  testEnvironment: 'node',
  transform: { '^.+\\.(t|j)sx?$': ['@swc/jest'] },
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
  testMatch: ['**/tests/**/*.test.ts'],
  moduleNameMapper: { '^@/(.*)$': '<rootDir>/src/$1' },
  collectCoverage: false,
  verbose: true,
};
