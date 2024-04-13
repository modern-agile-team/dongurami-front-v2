import React, { forwardRef, Ref } from "react";
import { IconProps } from "../Icon";
import Svg from "../Svg";
const SvgReRight48 = forwardRef(
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
        viewBox="0 0 33 33"
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
        <g clipPath="url(#clip0_344_3623)">
          <path
            d="M5.99902 16.333H27.3324M27.3324 16.333L19.3324 8.33301M27.3324 16.333L19.3324 24.333"
            stroke="#DCEAFF"
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M5.99902 16.333L5.99902 1.66634"
            stroke="#DCEAFF"
            strokeWidth={2}
            strokeLinecap="round"
          />
        </g>
        <defs>
          <clipPath id="clip0_344_3623">
            <rect x={0.666016} y={0.333008} width={32} height={32} rx={16} />
          </clipPath>
        </defs>
      </Svg>
    );
  }
);
SvgReRight48.defaultProps = {
  size: 48,
  focusable: false,
  "aria-hidden": true,
  role: "img",
  fill: "currentcolor",
};
export default SvgReRight48;
