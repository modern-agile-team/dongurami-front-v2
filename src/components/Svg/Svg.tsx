import { SVGProps } from "react";

import { filterSVGAttribute } from "@/utils";

/*
 * Created on Sun Feb 18 2024
 *
 * Copyright (c) 2024 Your Company
 */

export type SvgProps = SVGProps<SVGSVGElement> & {
  enableBackground?: string | number;
  title?: string;
  titleId?: string;
  desc?: string;
  descId?: string;
};

export default function Svg(props: SvgProps) {
  return <svg {...filterSVGAttribute(props)}></svg>;
}
