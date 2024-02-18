// eslint-disable-next-line @typescript-eslint/ban-ts-comment
import React, { forwardRef, Ref } from "react";
import { IconProps } from "../Icon";
import Svg from "../Svg";
const SvgHeart24 = forwardRef(
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
        <path d="M12 5.49999L11.46 6.01999C11.53 6.09257 11.6138 6.15031 11.7066 6.18974C11.7994 6.22918 11.8992 6.24951 12 6.24951C12.1008 6.24951 12.2006 6.22918 12.2934 6.18974C12.3862 6.15031 12.47 6.09257 12.54 6.01999L12 5.49999ZM9.426 18.322C7.91 17.127 6.253 15.96 4.938 14.48C3.65 13.028 2.75 11.335 2.75 9.13699H1.25C1.25 11.803 2.36 13.837 3.817 15.476C5.247 17.086 7.071 18.376 8.497 19.5L9.426 18.322ZM2.75 9.13699C2.75 6.98699 3.965 5.18299 5.624 4.42399C7.236 3.68699 9.402 3.88199 11.46 6.01999L12.54 4.98099C10.1 2.44399 7.264 2.02499 5 3.05999C2.786 4.07299 1.25 6.42499 1.25 9.13699H2.75ZM8.497 19.5C9.01 19.904 9.56 20.334 10.117 20.66C10.674 20.985 11.31 21.25 12 21.25V19.75C11.69 19.75 11.326 19.63 10.874 19.365C10.421 19.101 9.952 18.737 9.426 18.322L8.497 19.5ZM15.503 19.5C16.929 18.375 18.753 17.087 20.183 15.476C21.64 13.836 22.75 11.803 22.75 9.13699H21.25C21.25 11.335 20.35 13.028 19.062 14.48C17.747 15.96 16.09 17.127 14.574 18.322L15.503 19.5ZM22.75 9.13699C22.75 6.42499 21.215 4.07299 19 3.05999C16.736 2.02499 13.902 2.44399 11.46 4.97999L12.54 6.01999C14.598 3.88299 16.764 3.68699 18.376 4.42399C20.035 5.18299 21.25 6.98599 21.25 9.13699H22.75ZM14.574 18.322C14.048 18.737 13.579 19.101 13.126 19.365C12.674 19.629 12.31 19.75 12 19.75V21.25C12.69 21.25 13.326 20.985 13.883 20.66C14.441 20.334 14.99 19.904 15.503 19.5L14.574 18.322Z" />
      </Svg>
    );
  }
);
SvgHeart24.defaultProps = {
  size: 24,
  focusable: false,
  "aria-hidden": true,
  role: "img",
  fill: "currentcolor",
};
export default SvgHeart24;
