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
          id="Vector"
          fillRule="evenodd"
          clipRule="evenodd"
          d="M4.73926 32.0833C4.73926 31.7932 4.85449 31.515 5.05961 31.3099C5.26473 31.1047 5.54293 30.9895 5.83301 30.9895H29.1663C29.4564 30.9895 29.7346 31.1047 29.9397 31.3099C30.1449 31.515 30.2601 31.7932 30.2601 32.0833C30.2601 32.3733 30.1449 32.6515 29.9397 32.8567C29.7346 33.0618 29.4564 33.177 29.1663 33.177H5.83301C5.54293 33.177 5.26473 33.0618 5.05961 32.8567C4.85449 32.6515 4.73926 32.3733 4.73926 32.0833Z"
          fill="white"
        />
        <path
          id="Vector_2"
          d="M16.7997 21.7714L25.4287 13.1425C23.9769 12.5365 22.6583 11.651 21.548 10.5364C20.4328 9.42585 19.5468 8.1068 18.9405 6.65436L10.3101 15.2833C9.63638 15.9571 9.2995 16.2925 9.01075 16.6644C8.66908 17.1023 8.37617 17.5761 8.13721 18.0775C7.9345 18.5019 7.78429 18.9539 7.48242 19.8567L5.89575 24.621C5.82294 24.839 5.8123 25.0729 5.86502 25.2966C5.91774 25.5203 6.03175 25.7248 6.19424 25.8873C6.35674 26.0498 6.5613 26.1638 6.78497 26.2166C7.00864 26.2693 7.24258 26.2586 7.46054 26.1858L12.2235 24.5992C13.1276 24.2973 13.5797 24.1471 14.0041 23.9429C14.5057 23.7049 14.9796 23.4125 15.4172 23.0708C15.7891 22.7806 16.1245 22.4437 16.7983 21.7714M27.8233 10.7479C28.2493 10.3218 28.5872 9.81594 28.8177 9.25923C29.0482 8.70253 29.1668 8.10587 29.1668 7.50332C29.1667 6.90078 29.048 6.30415 28.8173 5.74749C28.5867 5.19084 28.2486 4.68506 27.8225 4.25905C27.3964 3.83303 26.8906 3.49512 26.3339 3.26459C25.7771 3.03407 25.1805 2.91546 24.5779 2.91553C23.9754 2.9156 23.3788 3.03434 22.8221 3.26499C22.2655 3.49564 21.7597 3.83367 21.3337 4.25978L20.2983 5.29519L20.3435 5.42644C20.7226 6.51874 21.4387 7.95228 22.7847 9.29832C23.9076 10.4275 25.2789 11.2785 26.7893 11.7833L27.8233 10.7479Z"
          fill="white"
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
