/*
 * Created on Wed Jan 17 2024
 *
 * Copyright (c) 2024 Your Company
 */

import React, { AllHTMLAttributes, forwardRef } from "react";
import { Theme, ThemeColor, css } from "@emotion/react";
import styled from "@emotion/styled";

import { createStyled, domElementList, filterHTMLAttribute } from "@/utils";
import { lightThemeColor, typographyTheme } from "@/styles/theme";

type TypoSize = keyof Theme["typography"];
type TypoColor = keyof ThemeColor;

type TypographyProps = {
  typoSize?: TypoSize;
  typoColor?: TypoColor;
};
type TypographyBaseType = React.ForwardRefExoticComponent<
  React.ComponentProps<typeof StyledTypography> & React.RefAttributes<unknown>
>;
type TypographyTagsType = {
  [tag in keyof JSX.IntrinsicElements]: TypographyBaseType;
};

interface CreateTypography extends TypographyBaseType, TypographyTagsType {}

const fontSize = (typoSize: TypoSize) => css`
  font-size: ${typographyTheme[typoSize].fontSize};
`;

const lineHeight = (typoSize: TypoSize) => css`
  line-height: ${typographyTheme[typoSize].lineHeight};
`;

const fontWeight = (typoSize: TypoSize) => css`
  font-weight: ${typographyTheme[typoSize].fontWeight};
`;

const textColor = (typoColor: TypoColor) => css`
  color: ${lightThemeColor[typoColor]};
`;

export const TypographyCSS = (
  typoSize: TypoSize = "Body1",
  typoColor: TypoColor = "neutral_70"
) => css`
  ${fontSize(typoSize)};
  ${fontWeight(typoSize)};
  ${lineHeight(typoSize)};
  ${typoColor && textColor(typoColor)};
`;

const StyledTypography = styled(
  forwardRef(
    (
      props: { tag?: keyof JSX.IntrinsicElements } & TypographyProps &
        AllHTMLAttributes<HTMLElement>,
      ref
    ) => {
      const { tag = "span", ...rest } = props;

      const htmlAttrs = filterHTMLAttribute(rest);

      return React.createElement(tag, { ...htmlAttrs, ref });
    }
  )
)`
  ${(props) =>
    TypographyCSS(props.typoSize as TypoSize, props.typoColor as TypoColor)}
`;

const TypographyBase: TypographyBaseType = forwardRef(
  ({ ...rest }: React.ComponentProps<typeof StyledTypography>, ref) =>
    createStyled(StyledTypography)({ ...rest, ref })
);

const Typography = TypographyBase as CreateTypography;

domElementList.forEach((domElement) => {
  Typography[domElement] = forwardRef(({ ...rest }, ref) =>
    createStyled(StyledTypography, domElement)[domElement]({ ...rest, ref })
  );
});

export default Typography;
