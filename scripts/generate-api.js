const { generateApi } = require("swagger-typescript-api");
const path = require("path");
const fs = require("fs");

generateApi({
  name: "Apis.d.ts",
  url: "http://43.200.169.78:3000/api-docs-json",
  output: path.resolve(process.cwd(), "./src/apis"),
  prettier: {
    printWidth: 120,
    tabWidth: 2,
    useTabs: false,
    singleQuote: false,
    bracketSpacing: true,
    semi: true,
    bracketSpacing: true,
    arrowParens: "always",
    trailingComma: "none",
    jsxSingleQuote: false,
    jsxBracketSameLine: false,
    trailingComma: "es5",
  },
  generateClient: true,
  extractRequestParams: true,
  extractRequestBody: true,
  extractEnums: true,
  generateUnionEnums: true,
  generateRouteTypes: false,
  enumNamesAsValues: true,
  addReadonly: true,
  httpClientType: "axios",
  modular: true,
  moduleNameFirstTag: true,
  moduleNameIndex: true,
  singleHttpClient: true,
});
