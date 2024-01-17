/**
 * @copyright (C) 2023, rsupport. All rights reserved
 *
 * @license
 * This software and/or source code may be used, copied and/or disseminated only
 * with the written permission of rsupport, or in accordance with the terms
 * and conditions stipulated in the agreement/contract under which the software
 * and/or source code has been supplied by rsupport or its affiliates.
 * Unauthorized use, copying, or dissemination of this file, via any medium, is
 * strictly prohibited, and will constitute an infringement of copyright.
 *
 * @author
 * Soonki Min (skmin@rsupport.com)
 *
 * @description
 *
 * @created at Fri Mar 24 2023
 **/
import React, { AllHTMLAttributes, forwardRef } from "react";
import { Theme, css } from "@emotion/react";
import styled from "@emotion/styled";

import { createStyled, domElementList } from "@/utils";
import { lightThemeColor, typographyTheme } from "@/styles/theme";

type TypographyProps = {
  typoSize?: keyof Theme["typography"];
  typoColor?: keyof Theme["color"]["dark"];
};
type TypographyBaseType = React.ForwardRefExoticComponent<
  React.ComponentProps<typeof StyledTypography> & React.RefAttributes<unknown>
>;
type TypographyTagsType = {
  [tag in keyof JSX.IntrinsicElements]: TypographyBaseType;
};

interface CreateTypography extends TypographyBaseType, TypographyTagsType {}

const fontSize = (typoSize: keyof Theme["typography"]) => css`
  font-size: ${typographyTheme[typoSize].fontSize};
`;

const lineHeight = (typoSize: keyof Theme["typography"]) => css`
  line-height: ${typographyTheme[typoSize].lineHeight};
`;

const fontWeight = (typoSize: keyof Theme["typography"]) => css`
  font-weight: ${typographyTheme[typoSize].fontWeight};
`;

const textColor = (typoColor: keyof Theme["color"]["dark"]) => css`
  color: ${lightThemeColor[typoColor]};
`;

export const TypographyCSS = (
  typoSize: keyof Theme["typography"] = "Body1",
  typoColor: keyof Theme["color"]["dark"] = "neutral_70"
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

      delete rest.typoSize;
      delete rest.typoColor;

      return React.createElement(tag, { ...rest, ref });
    }
  )
)`
  ${(props) =>
    TypographyCSS(
      props.typoSize as keyof Theme["typography"],
      props.typoColor as keyof Theme["color"]["dark"]
    )}
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
