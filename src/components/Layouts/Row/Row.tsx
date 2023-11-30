/*
 * Created on Mon Nov 13 2023
 *
 * Copyright (c) 2023 Your Company
 */

import { createStyled, domElementList, filterHTMLAttribute } from "@/utils";
import { css } from "@emotion/react";
import styled from "@emotion/styled";
import React, { AllHTMLAttributes, forwardRef } from "react";

type RowProps = {
  verticalAlign?: "center" | "top" | "bottom";
  horizonAlign?: "center" | "left" | "right" | "distribute";
  gap?: number | string;
  reverse?: boolean;
};
type RowBaseType = React.ForwardRefExoticComponent<
  React.ComponentProps<typeof StyledRow> & React.RefAttributes<unknown>
>;
type RowTagsType = {
  [tag in keyof JSX.IntrinsicElements]: RowBaseType;
};

interface CreateRow extends RowBaseType, RowTagsType {}

const RowCSS = (props?: RowProps) => css`
  display: flex;
  flex-direction: ${(() => (props?.reverse ? "row-reverse" : "row"))()};
  align-items: space-between;
  justify-content: ${(() => {
    switch (props?.horizonAlign) {
      case "center":
        return "center";
      case "left":
        return props.reverse ? "flex-end" : "flex-start";
      case "right":
        return props.reverse ? "flex-start" : "flex-end";
      case "distribute":
        return "space-between";
      default:
        return props?.reverse ? "flex-end" : "flex-start";
    }
  })()};
  align-items: ${(() => {
    switch (props?.verticalAlign) {
      case "center":
        return "center";
      case "top":
        return "flex-start";
      case "bottom":
        return "flex-end";
      default:
        return "flex-start";
    }
  })()};
  gap: ${(() => {
    if (props?.gap) {
      if (typeof props.gap === "number") return `${props.gap}px`;
      return props.gap;
    } else {
      return 0;
    }
  })()};
`;

const StyledRow = styled(
  forwardRef(
    (
      props: { tag?: keyof JSX.IntrinsicElements } & RowProps &
        AllHTMLAttributes<HTMLElement>,
      ref
    ) => {
      const { tag = "div", ...rest } = props;

      const htmlAttrs = filterHTMLAttribute(rest);

      return React.createElement(tag, { ...htmlAttrs, ref });
    }
  )
)`
  ${(props) => RowCSS(props)}
`;

const RowBase: RowBaseType = forwardRef(
  ({ ...rest }: React.ComponentProps<typeof StyledRow>, ref) =>
    createStyled(StyledRow)({ ...rest, ref })
);

/**
 * @param tag HTML 태그명 ex) div | form | ul
 * @param verticalAlign 상하 정렬 방식 ["center" | "top" | "bottom"]
 * @param horizonAlign 좌우 정렬 방식 ["center" | "left" | "right" | "distribute"]
 * @param gap Row의 자식들간의 간격
 */
const Row = RowBase as CreateRow;

domElementList.forEach((domElement) => {
  Row[domElement] = forwardRef(({ ...rest }, ref) =>
    createStyled(StyledRow, domElement)[domElement]({ ...rest, ref })
  );
});

export default Row;
