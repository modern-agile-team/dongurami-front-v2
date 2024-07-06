import React, { forwardRef, Ref } from "react";
import { IconProps } from "../Icon";
import Svg from "../Svg";
const SvgStar32 = forwardRef(
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
        viewBox="0 0 32 32"
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
        <path d="M12.2056 7.21075C13.8949 4.18141 14.7389 2.66675 16.0016 2.66675C17.2643 2.66675 18.1083 4.18141 19.7976 7.21075L20.2349 7.99475C20.7149 8.85608 20.9549 9.28675 21.3283 9.57075C21.7016 9.85475 22.1683 9.96008 23.1016 10.1707L23.9496 10.3627C27.2296 11.1054 28.8683 11.4761 29.2589 12.7307C29.6483 13.9841 28.5309 15.2921 26.2949 17.9067L25.7163 18.5827C25.0816 19.3254 24.7629 19.6974 24.6203 20.1561C24.4776 20.6161 24.5256 21.1121 24.6216 22.1027L24.7096 23.0054C25.0469 26.4947 25.2163 28.2387 24.195 29.0134C23.1736 29.7894 21.6376 29.0814 18.5683 27.6681L17.7723 27.3027C16.9003 26.9001 16.4643 26.7001 16.0016 26.7001C15.5389 26.7001 15.1029 26.9001 14.2309 27.3027L13.4363 27.6681C10.3656 29.0814 8.82962 29.7881 7.80962 29.0147C6.78695 28.2387 6.95628 26.4947 7.29362 23.0054L7.38162 22.1041C7.47762 21.1121 7.52562 20.6161 7.38162 20.1574C7.24028 19.6974 6.92162 19.3254 6.28695 18.5841L5.70828 17.9067C3.47228 15.2934 2.35495 13.9854 2.74428 12.7307C3.13495 11.4761 4.77495 11.1041 8.05495 10.3627L8.90295 10.1707C9.83495 9.96008 10.3003 9.85475 10.6749 9.57075C11.0483 9.28675 11.2883 8.85608 11.7683 7.99475L12.2056 7.21075Z" />
      </Svg>
    );
  }
);
SvgStar32.defaultProps = {
  size: 32,
  focusable: false,
  "aria-hidden": true,
  role: "img",
  fill: "currentcolor",
};
export default SvgStar32;
