/*
 * Created on Sun Feb 18 2024
 *
 * Copyright (c) 2024 Your Company
 */

import React from "react";
import * as Icons from "./Icons";
import { Theme, useTheme } from "@emotion/react";
export type IconProps = {
  color?: string;
  fill?: React.SVGProps<SVGSVGElement>["fill"];
  size?: React.SVGProps<SVGSVGElement>["width"];
  title?: string;
  titleId?: string;
  desc?: string;
  descId?: string;
} & React.SVGProps<SVGSVGElement>;

export type IconName = keyof typeof Icons;

export type IconComponentProps = {
  name: IconName;
  fill?: keyof Theme["color"];
} & Omit<IconProps, "fill">;

const Icon = React.forwardRef(
  (
    { name, ...rest }: IconComponentProps,
    ref: React.Ref<SVGSVGElement> | undefined
  ) => {
    const theme = useTheme();
    const IconComp = Icons[name as IconName];
    return (
      <IconComp
        {...rest}
        fill={theme.color[rest.fill ?? "neutral_10"]}
        ref={ref}
      />
    );
  }
);

export default Icon;
