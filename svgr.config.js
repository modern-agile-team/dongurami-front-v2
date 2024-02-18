const dynamicTitlePlugin = require("./plugins/svg-dynamic-title-plugin");
const replaceSvgPlugin = require("./plugins/svg-replace-plugin");
const removeFillPlugin = require("./plugins/svg-remove-fill-pluigin");

const propTypesTemplate = ({ componentName, jsx }, { tpl }) => {
  return tpl`
    import React, { forwardRef, Ref } from 'react';
    import { IconProps } from "../Icon";
    import Svg from "../Svg";

    const ${componentName} = forwardRef(
		({
        size,
        title,
        desc,
        titleId,
        descId,
        ...props
    }: IconProps, ref: Ref<SVGSVGElement>) => {
        let ariaLabelledBy : string | undefined = titleId ? titleId : ''
        ariaLabelledBy += desc && descId ? \` \${descId}\` : ''
        ariaLabelledBy = ariaLabelledBy ? ariaLabelledBy : undefined
        props['aria-labelledby'] = ariaLabelledBy
        return (${jsx})
    });

    ${componentName}.defaultProps = {
        size: ${componentName.slice(-2)},
        focusable: false,
        'aria-hidden': true,
        role: 'img',
        fill: 'currentcolor'
    }
    export default ${componentName}`;
};
// eslint-disable-next-line no-undef
module.exports = {
  template: propTypesTemplate,
  jsx: {
    babelConfig: {
      plugins: [replaceSvgPlugin, dynamicTitlePlugin],
    },
  },
  ref: true,
  svgProps: {
    height: "{size}",
    width: "{size}",
    title: "{title}",
    titleId: "{titleId}",
    desc: "{desc}",
    descId: "{descId}",
    "aria-labelledby": "{ariaLabelledBy}",
    "aria-hidden": "{!ariaLabelledBy}",
  },
  outDir: "./src/components/Svg/Icons",
  filenameCase: "kebab",
  plugins: [removeFillPlugin, "@svgr/plugin-prettier"],
  typescript: true,
  prettierConfig: {
    arrowParens: "always",
    bracketSpacing: true,
    jsxSingleQuote: false,
    singleQuote: false,
    printWidth: 80,
    semi: true,
    tabWidth: 2,
    trailingComma: "es5",
  },
};
