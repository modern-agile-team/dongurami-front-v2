/** @type {import('ts-jest').JestConfigWithTsJest} */
module.exports = {
  preset: "ts-jest",
  testEnvironment: "jsdom",
  transformIgnorePatterns: ["/node_modules/(?!node-fetch/.*)"],
  transform: {
    "^.+\\.tsx?$": ["ts-jest", { tsconfig: "./tsconfig.test.json" }],
    "^.+\\.jsx?$": "babel-jest",
    "^.+\\.svg$": "jest-transformer-svg",
  },
  setupFilesAfterEnv: ["./jest.setup.ts"],
  moduleNameMapper: {
    "^@/(.*)$": "<rootDir>/src/$1",
    "\\.(css|less|scss|sass)$": "identity-obj-proxy",
  },
  coveragePathIgnorePatterns: ["node_modules", "apis", "pages", "containers"],
};
