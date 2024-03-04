import React, { forwardRef, Ref } from "react";
import { IconProps } from "../Icon";
import Svg from "../Svg";
const SvgSearch30 = forwardRef(
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
        viewBox="0 0 30 30"
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
          fillRule="evenodd"
          clipRule="evenodd"
          d="M14.8125 3.875C13.3762 3.875 11.9539 4.15791 10.6269 4.70757C9.2999 5.25723 8.09416 6.06288 7.07852 7.07852C6.06288 8.09416 5.25723 9.2999 4.70757 10.6269C4.15791 11.9539 3.875 13.3762 3.875 14.8125C3.875 16.2488 4.15791 17.6711 4.70757 18.9981C5.25723 20.3251 6.06288 21.5308 7.07852 22.5465C8.09416 23.5621 9.2999 24.3678 10.6269 24.9174C11.9539 25.4671 13.3762 25.75 14.8125 25.75C17.7133 25.75 20.4953 24.5977 22.5465 22.5465C24.5977 20.4953 25.75 17.7133 25.75 14.8125C25.75 11.9117 24.5977 9.1297 22.5465 7.07852C20.4953 5.02734 17.7133 3.875 14.8125 3.875ZM2 14.8125C2 7.7375 7.7375 2 14.8125 2C21.8875 2 27.625 7.7375 27.625 14.8125C27.625 18.0125 26.4512 20.94 24.5112 23.185L28.6 27.275C28.6921 27.3608 28.766 27.4643 28.8172 27.5793C28.8685 27.6943 28.896 27.8185 28.8982 27.9443C28.9005 28.0702 28.8773 28.1953 28.8302 28.312C28.783 28.4287 28.7128 28.5348 28.6238 28.6238C28.5348 28.7128 28.4287 28.783 28.312 28.8302C28.1953 28.8773 28.0702 28.9005 27.9443 28.8982C27.8185 28.896 27.6943 28.8685 27.5793 28.8172C27.4643 28.766 27.3608 28.6921 27.275 28.6L23.185 24.5112C20.8604 26.5238 17.8873 27.6295 14.8125 27.625C7.7375 27.625 2 21.8875 2 14.8125Z"
        />
      </Svg>
    );
  }
);
SvgSearch30.defaultProps = {
  size: 30,
  focusable: false,
  "aria-hidden": true,
  role: "img",
  fill: "currentcolor",
};
export default SvgSearch30;
