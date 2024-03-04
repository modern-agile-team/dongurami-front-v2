const { parse } = require("svg-parser");
const hastToBabelAst = require("@svgr/hast-util-to-babel-ast");
const { transformFromAstSync, createConfigItem } = require("@babel/core");
const svgrBabelPreset = require("@svgr/babel-preset");
const getJsxRuntimeOptions = (config) => {
  if (config.jsxRuntimeImport) {
    return {
      importSource: config.jsxRuntimeImport.source,
      jsxRuntimeImport: config.jsxRuntimeImport,
    };
  }
  switch (config.jsxRuntime) {
    case null:
    case undefined:
    case "classic":
      return {
        jsxRuntime: "classic",
        importSource: "react",
        jsxRuntimeImport: { namespace: "React", source: "react" },
      };
    case "classic-preact":
      return {
        jsxRuntime: "classic",
        importSource: "preact/compat",
        jsxRuntimeImport: { specifiers: ["h"], source: "preact" },
      };
    case "automatic":
      return { jsxRuntime: "automatic" };
    default:
      throw new Error(`Unsupported "jsxRuntime" "${config.jsxRuntime}"`);
  }
};

const removeFillPlugin = (code, config, state) => {
  const filePath = state.filePath || "unknown";

  // Remove fill attribute from All icons except Unique icons
  if (!state.filePath.split("/").reverse()[0].includes("Unique")) {
    const regex = /fill=[\'\"]([^\'\"]+)[\'\"]/gi;
    code = code.replace(regex, "");
  }

  const hastTree = parse(code);
  const babelTree = hastToBabelAst(hastTree);

  const svgPresetOptions = {
    ref: config.ref,
    titleProp: config.titleProp,
    descProp: config.descProp,
    expandProps: config.expandProps,
    dimensions: config.dimensions,
    icon: config.icon,
    native: config.native,
    svgProps: config.svgProps,
    replaceAttrValues: config.replaceAttrValues,
    typescript: config.typescript,
    template: config.template,
    memo: config.memo,
    exportType: config.exportType,
    namedExport: config.namedExport,
    ...getJsxRuntimeOptions(config),
    state,
    ...config,
  };
  const result = transformFromAstSync(babelTree, code, {
    caller: {
      name: "svgr",
    },
    presets: [
      createConfigItem([svgrBabelPreset, svgPresetOptions], {
        type: "preset",
      }),
    ],
    filename: filePath,
    babelrc: true,
    configFile: true,
    code: true,
    ast: false,
    inputSourceMap: false,
    ...(config.jsx && config.jsx.babelConfig),
  });
  return result.code;
};

module.exports = removeFillPlugin;
