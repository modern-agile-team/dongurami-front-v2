import React, { forwardRef, Ref } from "react";
import { IconProps } from "../Icon";
import Svg from "../Svg";
const SvgNotice32 = forwardRef(
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
        <path d="M18.0891 15.0358L17.5476 15.5856C17.692 15.7277 17.8865 15.8073 18.0891 15.8073C18.2917 15.8073 18.4861 15.7277 18.6306 15.5856L18.0891 15.0358ZM17.5383 19.0579C17.0267 18.6811 16.4285 18.187 15.9663 17.6548C15.4825 17.0978 15.2581 16.6253 15.2581 16.2774H13.7139C13.7139 17.2018 14.2533 18.0377 14.801 18.6678C15.3692 19.3225 16.0693 19.8928 16.6231 20.3015L17.5383 19.0579ZM15.2581 16.2774C15.2581 15.4981 15.6112 15.1275 15.9416 15.0091C16.2885 14.8835 16.8887 14.937 17.5476 15.5856L18.6306 14.4851C17.669 13.538 16.4666 13.1777 15.4176 13.5565C14.3521 13.9405 13.7139 14.9895 13.7139 16.2774H15.2581ZM19.555 20.3015C20.1089 19.8938 20.8089 19.3225 21.3771 18.6678C21.9248 18.0367 22.4643 17.2018 22.4643 16.2774H20.9201C20.9201 16.6243 20.6956 17.0978 20.2118 17.6548C19.7485 18.187 19.1515 18.6811 18.6398 19.0579L19.555 20.3015ZM22.4643 16.2774C22.4643 14.9895 21.826 13.9405 20.7605 13.5565C19.7105 13.1777 18.5091 13.538 17.5476 14.4851L18.6306 15.5856C19.2894 14.937 19.8896 14.8835 20.2365 15.0091C20.567 15.1275 20.9201 15.4991 20.9201 16.2774H22.4643ZM16.6231 20.3015C17.0122 20.5877 17.4487 20.9449 18.0891 20.9449V19.4007C18.0685 19.4007 18.052 19.4018 17.9892 19.3688C17.8326 19.2747 17.682 19.1708 17.5383 19.0579L16.6231 20.3015ZM18.6398 19.0579C18.4955 19.1709 18.3452 19.2748 18.1879 19.3688C18.1261 19.4018 18.1097 19.4007 18.0891 19.4007V20.9449C18.7294 20.9449 19.1659 20.5877 19.555 20.3015L18.6398 19.0579Z" />
        <path
          d="M21.6923 6.97559H3.16211M21.6923 11.0934H3.16211M10.3683 15.2112H3.16211M10.3683 19.3291H3.16211"
          stroke="#FBAD45"
          strokeWidth={1.54419}
          strokeLinecap="round"
        />
      </Svg>
    );
  }
);
SvgNotice32.defaultProps = {
  size: 32,
  focusable: false,
  "aria-hidden": true,
  role: "img",
  fill: "currentcolor",
};
export default SvgNotice32;
