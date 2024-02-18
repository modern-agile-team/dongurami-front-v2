// eslint-disable-next-line @typescript-eslint/ban-ts-comment
import React, { forwardRef, Ref } from "react";
import { IconProps } from "../Icon";
import Svg from "../Svg";
const SvgHeartfull24 = forwardRef(
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
        <path d="M2 9.13709C2 14.0001 6.02 16.5911 8.962 18.9111C10 19.7291 11 20.5001 12 20.5001C13 20.5001 14 19.7301 15.038 18.9101C17.981 16.5921 22 14.0001 22 9.13809C22 4.27509 16.5 0.826086 12 5.50209C7.5 0.825086 2 4.27409 2 9.13709Z" />
      </Svg>
    );
  }
);
SvgHeartfull24.defaultProps = {
  size: 24,
  focusable: false,
  "aria-hidden": true,
  role: "img",
  fill: "currentcolor",
};
export default SvgHeartfull24;
