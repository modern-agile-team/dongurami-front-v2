import React, { forwardRef, Ref } from "react";
import { IconProps } from "../Icon";
import Svg from "../Svg";
const SvgChat30 = forwardRef(
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
        viewBox="0 0 21 21"
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
        <g id="chat_30">
          <g id="Group">
            <path
              id="Vector"
              d="M7.33496 10.665H7.34246M10.6608 10.665H10.6683M13.9941 10.665H14.0016"
              stroke="#FBAD45"
              strokeWidth={1.66667}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              id="Vector_2"
              d="M10.6683 18.9977C15.2708 18.9977 19.0016 15.2669 19.0016 10.6644C19.0016 6.06189 15.2708 2.33105 10.6683 2.33105C6.06579 2.33105 2.33496 6.06189 2.33496 10.6644C2.33496 11.9977 2.64829 13.2577 3.20413 14.3752C3.35246 14.6719 3.40163 15.0111 3.31579 15.3319L2.81996 17.1869C2.77085 17.3705 2.7709 17.5637 2.82009 17.7473C2.86928 17.9308 2.96589 18.0982 3.10022 18.2326C3.23455 18.3671 3.40188 18.4638 3.5854 18.5131C3.76892 18.5624 3.96219 18.5625 4.14579 18.5136L6.00079 18.0169C6.3228 17.9359 6.66332 17.9753 6.95829 18.1277C8.11073 18.7016 9.38088 18.9994 10.6683 18.9977Z"
              stroke="#FBAD45"
              strokeWidth={1.25}
            />
          </g>
        </g>
      </Svg>
    );
  }
);
SvgChat30.defaultProps = {
  size: 30,
  focusable: false,
  "aria-hidden": true,
  role: "img",
  fill: "currentcolor",
};
export default SvgChat30;
