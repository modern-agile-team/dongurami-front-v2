import React, { forwardRef, Ref } from "react";
import { IconProps } from "../Icon";
import Svg from "../Svg";
const SvgDeletion32 = forwardRef(
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
        viewBox="0 0 25 26"
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
        <g id="deletion_32">
          <g id="Group">
            <path
              id="Vector"
              d="M3.08789 11.4159C3.08789 8.12371 3.08789 6.47761 3.47703 5.92376C3.86513 5.37095 5.41241 4.84077 8.50798 3.78146L9.09786 3.57969C10.711 3.02687 11.5171 2.75098 12.353 2.75098C13.1879 2.75098 13.995 3.02687 15.6082 3.57969L16.198 3.78146C19.2936 4.84077 20.8409 5.37095 21.229 5.92376C21.6181 6.47761 21.6181 8.12474 21.6181 11.4159V13.0363C21.6181 18.8404 17.2543 21.658 14.5159 22.8532C13.7737 23.1775 13.4031 23.3401 12.353 23.3401C11.303 23.3401 10.9324 23.1775 10.1901 22.8532C7.45176 21.657 3.08789 18.8414 3.08789 13.0363V11.4159Z"
              stroke="#FBAD45"
              strokeWidth={1.54419}
            />
            <path
              id="Vector_2"
              d="M14.9266 10.4717L9.7793 15.619M9.7793 10.4717L14.9266 15.619"
              stroke="#FBAD45"
              strokeWidth={1.54419}
              strokeLinecap="round"
            />
          </g>
        </g>
      </Svg>
    );
  }
);
SvgDeletion32.defaultProps = {
  size: 32,
  focusable: false,
  "aria-hidden": true,
  role: "img",
  fill: "currentcolor",
};
export default SvgDeletion32;
