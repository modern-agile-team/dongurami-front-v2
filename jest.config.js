/** @type {import('ts-jest').JestConfigWithTsJest} */
module.exports = {
  globals: {
    "ts-jest": {
      tsconfig: "./tsconfig.test.json",
    },
  },
  preset: "ts-jest",
  testEnvironment: "jsdom",
  transformIgnorePatterns: ["/node_modules/(?!node-fetch/.*)"],
  transform: {
    "^.+\\.tsx?$": "ts-jest",
    "^.+\\.jsx?$": "babel-jest",
  },
  setupFilesAfterEnv: ["./jest.setup.ts"],
  moduleNameMapper: {
    "^@/(.*)$": "<rootDir>/src/$1",
  },
};
