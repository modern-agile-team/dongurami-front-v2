import React, { forwardRef, Ref } from "react";
import { IconProps } from "../Icon";
import Svg from "../Svg";
const SvgChat24 = forwardRef(
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
          d="M12 22C17.523 22 22 17.523 22 12C22 6.477 17.523 2 12 2C6.477 2 2 6.477 2 12C2 13.6 2.376 15.112 3.043 16.453C3.221 16.809 3.28 17.216 3.177 17.601L2.582 19.827C2.52307 20.0473 2.52312 20.2792 2.58216 20.4995C2.64119 20.7197 2.75712 20.9206 2.91831 21.0819C3.07951 21.2432 3.2803 21.3593 3.50053 21.4184C3.72075 21.4776 3.95267 21.4778 4.173 21.419L6.399 20.823C6.78541 20.7258 7.19403 20.7731 7.548 20.956C8.93092 21.6446 10.4551 22.0021 12 22Z"
          stroke="#1E1E1E"
          strokeWidth={1.5}
        />
      </Svg>
    );
  }
);
SvgChat24.defaultProps = {
  size: 24,
  focusable: false,
  "aria-hidden": true,
  role: "img",
  fill: "currentcolor",
};
export default SvgChat24;
