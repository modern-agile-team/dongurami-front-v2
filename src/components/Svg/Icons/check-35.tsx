import React, { forwardRef, Ref } from "react";
import { IconProps } from "../Icon";
import Svg from "../Svg";
const SvgCheck35 = forwardRef(
  (
    { size, title, desc, titleId, descId, ...props }: IconProps,
    ref: Ref<SVGSVGElement>
  ) => {
    let ariaLabelledBy: string | undefined = titleId ? titleId : "";
    ariaLabelledBy += desc && descId ? ` ${descId}` : "";
    ariaLabelledBy = ariaLabelledBy ? ariaLabelledBy : undefined;
    props["aria-labelledby"] = ariaLabelledBy;
    return (
      <Svg
        width={size}
        height={size}
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
        title={title}
        titleId={titleId}
        desc={desc}
        descId={descId}
        aria-labelledby={ariaLabelledBy}
        aria-hidden={!ariaLabelledBy}
        ref={ref}
        {...props}
      >
        {!!title && <title id={titleId}>{title}</title>}
        {!!desc && <desc id={descId}>{desc}</desc>}
        <path
          d="M7 12.375L9.91667 15.2917L17.2083 8"
          stroke="#898989"
          strokeWidth={2.1875}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </Svg>
    );
  }
);
SvgCheck35.defaultProps = {
  size: 35,
  focusable: false,
  "aria-hidden": true,
  role: "img",
  fill: "currentcolor",
};
export default SvgCheck35;
