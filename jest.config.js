const tsconfig = require('./tsconfig.json');
const moduleNameMapper = require('tsconfig-paths-jest')(tsconfig);

module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  rootDir: ".",
  testMatch: ["**/__tests__/**/*.test.(ts|tsx)"],
  verbose: false,
  clearMocks: true,
  resetModules: true,
  coveragePathIgnorePatterns: [
    "/node_modules/",
    "/__fixtures__/",
    "/__tests__/",
    "/(__)?mock(s__)?/",
    "/__jest__/",
    ".?.min.js"
  ],
  moduleDirectories: ["node_modules", "src"],
  transform: {
    "^.+\\.(ts|tsx)$": "ts-jest"
  },
  moduleFileExtensions: ["js", "jsx", "json", "ts"],
  moduleNameMapper,
};
