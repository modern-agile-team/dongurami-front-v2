const { generateApi } = require("swagger-typescript-api");
const path = require("path");
const fs = require("fs");

generateApi({
  name: "Apis.d.ts",
  // url: "http://dvapirfice.rsup.at:8080/api-docs",
  input: path.resolve(process.cwd(), "./api.json"),
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
  generateClient: false,
  extractRequestParams: true,
  extractRequestBody: true,
  extractEnums: true,
  generateUnionEnums: true,
  generateRouteTypes: true,
  enumNamesAsValues: true,
  addReadonly: true,
})
  .then(({ files }) => {
    files.forEach(({ fileName, fileExtension, fileContent }) => {
      fs.writeFileSync(
        path.resolve(process.cwd(), "./src/@types/apis", `${fileName}${fileExtension}`),
        `declare global {
  namespace Swagger {
    ${fileContent}	
    }
  }
  export {};
`
      );
    });
  })
  .catch((e) => console.error(e));
