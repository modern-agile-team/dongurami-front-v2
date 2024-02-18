/*
 * Created on Mon Nov 13 2023
 *
 * Copyright (c) 2023 Your Company
 */

import React, { AllHTMLAttributes, forwardRef } from "react";
import { css } from "@emotion/react";
import styled from "@emotion/styled";

import { createStyled, domElementList, filterHTMLAttribute } from "@/utils";

type ColumnProps = {
  verticalAlign?: "center" | "top" | "bottom" | "distribute";
  horizonAlign?: "center" | "left" | "right" | "distribute";
  gap?: number | string;
  reverse?: boolean;
};
type ColumnBaseType = React.ForwardRefExoticComponent<
  React.ComponentProps<typeof StyledColumn> & React.RefAttributes<unknown>
>;
type ColumnTagsType = {
  [tag in keyof JSX.IntrinsicElements]: ColumnBaseType;
};

interface CreateColumn extends ColumnBaseType, ColumnTagsType {}

const ColumnCSS = (props?: ColumnProps) => css`
  display: flex;
  flex-direction: ${(() => (props?.reverse ? "column-reverse" : "column"))()};
  justify-content: ${(() => {
    switch (props?.verticalAlign) {
      case "center":
        return "center";
      case "top":
        return props.reverse ? "flex-end" : "flex-start";
      case "bottom":
        return props.reverse ? "flex-start" : "flex-end";
      case "distribute":
        return "space-between";
      default:
        return props?.reverse ? "flex-end" : "flex-start";
    }
  })()};

  align-items: ${(() => {
    switch (props?.horizonAlign) {
      case "center":
        return "center";
      case "left":
        return "flex-start";
      case "right":
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

const StyledColumn = styled(
  forwardRef(
    (
      props: { tag?: keyof JSX.IntrinsicElements } & ColumnProps &
        AllHTMLAttributes<HTMLElement>,
      ref
    ) => {
      const { tag = "div", ...rest } = props;

      const htmlAttrs = filterHTMLAttribute(rest);

      return React.createElement(tag, { ...htmlAttrs, ref });
    }
  )
)`
  ${(props) => ColumnCSS(props)}
`;

const ColumnBase: ColumnBaseType = forwardRef(
  ({ ...rest }: React.ComponentProps<typeof StyledColumn>, ref) =>
    createStyled(StyledColumn)({ ...rest, ref })
);

/**
 * @param tag HTML 태그명 ex) div | form | ul
 * @param verticalAlign 상하 정렬 방식 ["center" | "top" | "bottom" | "distribute"]
 * @param horizonAlign 좌우 정렬 방식 ["center" | "left" | "right" | "distribute"]
 * @param gap Column의 자식들간의 간격
 * @param reverse true로 설정시 flex-direction column-reverse
 */
const Column = ColumnBase as CreateColumn;

domElementList.forEach((domElement) => {
  Column[domElement] = forwardRef(({ ...rest }, ref) =>
    createStyled(StyledColumn, domElement)[domElement]({ ...rest, ref })
  );
});

export default Column;
