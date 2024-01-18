import CalendarSvg from "../../assets/solar_calendar-line-duotone.svg";
import ChatDotsSvg from "../../assets/solar_chat-dots-line-duotone.svg";
import { SvgProps } from "./type";

export const Calendar = ({ color, size }: SvgProps) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M3.33325 20C3.33325 13.715 3.33325 10.5717 5.28659 8.62002C7.23825 6.66669 10.3816 6.66669 16.6666 6.66669H23.3333C29.6183 6.66669 32.7616 6.66669 34.7132 8.62002C36.6666 10.5717 36.6666 13.715 36.6666 20V23.3334C36.6666 29.6184 36.6666 32.7617 34.7132 34.7134C32.7616 36.6667 29.6183 36.6667 23.3333 36.6667H16.6666C10.3816 36.6667 7.23825 36.6667 5.28659 34.7134C3.33325 32.7617 3.33325 29.6184 3.33325 23.3334V20Z"
        stroke="#062C8F"
        stroke-width="2.5"
      />
      <path
        opacity="0.5"
        d="M11.6665 6.66669V4.16669M28.3332 6.66669V4.16669M4.1665 15H35.8332"
        stroke="#062C8F"
        stroke-width="2.5"
        stroke-linecap="round"
      />
      <path
        d="M30 28.3333C30 28.7754 29.8244 29.1993 29.5118 29.5118C29.1993 29.8244 28.7754 30 28.3333 30C27.8913 30 27.4674 29.8244 27.1548 29.5118C26.8423 29.1993 26.6667 28.7754 26.6667 28.3333C26.6667 27.8913 26.8423 27.4674 27.1548 27.1548C27.4674 26.8423 27.8913 26.6667 28.3333 26.6667C28.7754 26.6667 29.1993 26.8423 29.5118 27.1548C29.8244 27.4674 30 27.8913 30 28.3333ZM30 21.6667C30 22.1087 29.8244 22.5326 29.5118 22.8452C29.1993 23.1577 28.7754 23.3333 28.3333 23.3333C27.8913 23.3333 27.4674 23.1577 27.1548 22.8452C26.8423 22.5326 26.6667 22.1087 26.6667 21.6667C26.6667 21.2246 26.8423 20.8007 27.1548 20.4882C27.4674 20.1756 27.8913 20 28.3333 20C28.7754 20 29.1993 20.1756 29.5118 20.4882C29.8244 20.8007 30 21.2246 30 21.6667ZM21.6667 28.3333C21.6667 28.7754 21.4911 29.1993 21.1785 29.5118C20.8659 29.8244 20.442 30 20 30C19.558 30 19.134 29.8244 18.8215 29.5118C18.5089 29.1993 18.3333 28.7754 18.3333 28.3333C18.3333 27.8913 18.5089 27.4674 18.8215 27.1548C19.134 26.8423 19.558 26.6667 20 26.6667C20.442 26.6667 20.8659 26.8423 21.1785 27.1548C21.4911 27.4674 21.6667 27.8913 21.6667 28.3333ZM21.6667 21.6667C21.6667 22.1087 21.4911 22.5326 21.1785 22.8452C20.8659 23.1577 20.442 23.3333 20 23.3333C19.558 23.3333 19.134 23.1577 18.8215 22.8452C18.5089 22.5326 18.3333 22.1087 18.3333 21.6667C18.3333 21.2246 18.5089 20.8007 18.8215 20.4882C19.134 20.1756 19.558 20 20 20C20.442 20 20.8659 20.1756 21.1785 20.4882C21.4911 20.8007 21.6667 21.2246 21.6667 21.6667ZM13.3333 28.3333C13.3333 28.7754 13.1577 29.1993 12.8452 29.5118C12.5326 29.8244 12.1087 30 11.6667 30C11.2246 30 10.8007 29.8244 10.4882 29.5118C10.1756 29.1993 10 28.7754 10 28.3333C10 27.8913 10.1756 27.4674 10.4882 27.1548C10.8007 26.8423 11.2246 26.6667 11.6667 26.6667C12.1087 26.6667 12.5326 26.8423 12.8452 27.1548C13.1577 27.4674 13.3333 27.8913 13.3333 28.3333ZM13.3333 21.6667C13.3333 22.1087 13.1577 22.5326 12.8452 22.8452C12.5326 23.1577 12.1087 23.3333 11.6667 23.3333C11.2246 23.3333 10.8007 23.1577 10.4882 22.8452C10.1756 22.5326 10 22.1087 10 21.6667C10 21.2246 10.1756 20.8007 10.4882 20.4882C10.8007 20.1756 11.2246 20 11.6667 20C12.1087 20 12.5326 20.1756 12.8452 20.4882C13.1577 20.8007 13.3333 21.2246 13.3333 21.6667Z"
        fill="#062C8F"
      />
    </svg>
  );
};

export const ChatDots = ({ color, size }: SvgProps) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M22.8866 36.2833L23.7899 34.7566L21.6399 33.4833L20.7349 35.01L22.8866 36.2833ZM16.2099 34.7566L17.1133 36.2833L19.2633 35.01L18.3616 33.4833L16.2099 34.7566ZM20.7349 35.01C20.657 35.1347 20.5487 35.2375 20.4201 35.3087C20.2915 35.38 20.1469 35.4174 19.9999 35.4174C19.8529 35.4174 19.7083 35.38 19.5797 35.3087C19.4512 35.2375 19.3428 35.1347 19.2649 35.01L17.1133 36.2833C18.4016 38.4616 21.5966 38.4616 22.8866 36.2833L20.7349 35.01ZM17.4999 4.58331H22.4999V2.08331H17.4999V4.58331ZM35.4166 17.5V19.1666H37.9166V17.5H35.4166ZM4.58325 19.1666V17.5H2.08325V19.1666H4.58325ZM2.08325 19.1666C2.08325 21.0916 2.08325 22.5966 2.16659 23.8116C2.24992 25.0366 2.42159 26.0566 2.81325 27L5.12325 26.0433C4.87825 25.4566 4.73492 24.74 4.65992 23.6416C4.58325 22.5316 4.58325 21.125 4.58325 19.1666H2.08325ZM13.0049 30.4033C10.9116 30.3666 9.81492 30.2333 8.95492 29.8766L7.99992 32.1866C9.34159 32.7433 10.8683 32.8683 12.9616 32.905L13.0049 30.4033ZM2.81325 27C3.29486 28.1627 4.00079 29.2192 4.89072 30.1092C5.78065 30.9991 6.83716 31.705 7.99992 32.1866L8.95492 29.8766C7.21938 29.1577 5.84216 27.7789 5.12325 26.0433L2.81325 27ZM35.4166 19.1666C35.4166 21.125 35.4166 22.5316 35.3399 23.6416C35.2649 24.74 35.1216 25.4566 34.8783 26.0433L37.1866 27C37.5783 26.0566 37.7499 25.0366 37.8349 23.8116C37.9183 22.5966 37.9166 21.0916 37.9166 19.1666H35.4166ZM27.0382 32.9016C29.1316 32.8666 30.6583 32.7433 31.9999 32.1866L31.0433 29.8766C30.1849 30.2333 29.0883 30.3666 26.9966 30.4033L27.0382 32.9016ZM34.8783 26.0433C34.1593 27.7789 32.7805 29.1577 31.0449 29.8766L31.9999 32.1866C33.1627 31.705 34.2192 30.9991 35.1091 30.1092C35.9991 29.2192 36.705 28.1627 37.1866 27L34.8783 26.0433ZM22.4999 4.58331C25.2516 4.58331 27.2283 4.58331 28.7699 4.73165C30.2932 4.87665 31.2616 5.15331 32.0349 5.62665L33.3399 3.49498C32.1083 2.74165 30.7116 2.40498 29.0066 2.24165C27.3199 2.08165 25.2033 2.08331 22.4999 2.08331V4.58331ZM37.9166 17.5C37.9166 14.7966 37.9166 12.6816 37.7566 10.9933C37.5949 9.28831 37.2583 7.88998 36.5049 6.65998L34.3716 7.96498C34.8466 8.73831 35.1232 9.70665 35.2682 11.2316C35.4149 12.7716 35.4166 14.7483 35.4166 17.5H37.9166ZM32.0333 5.62665C32.9869 6.21047 33.7887 7.01177 34.3733 7.96498L36.5049 6.65998C35.7145 5.36994 34.63 4.28536 33.3399 3.49498L32.0333 5.62665ZM17.4999 2.08331C14.7966 2.08331 12.6816 2.08331 10.9933 2.24165C9.28825 2.40498 7.88992 2.74165 6.65992 3.49498L7.96492 5.62831C8.73825 5.15331 9.70658 4.87665 11.2316 4.73165C12.7716 4.58498 14.7483 4.58331 17.4999 4.58331V2.08331ZM4.58325 17.5C4.58325 14.7483 4.58325 12.7716 4.73159 11.23C4.87659 9.70665 5.15325 8.73831 5.62659 7.96498L3.49492 6.66165C2.74159 7.89165 2.40492 9.28831 2.24159 10.9933C2.08325 12.6833 2.08325 14.7966 2.08325 17.5H4.58325ZM6.65992 3.49498C5.36988 4.28536 4.2853 5.37161 3.49492 6.66165L5.62825 7.96498C6.21181 7.01215 7.01251 6.21089 7.96492 5.62665L6.65992 3.49498ZM18.3599 33.4833C18.0233 32.9116 17.7266 32.4066 17.4366 32.01C17.1383 31.575 16.7508 31.2086 16.2999 30.935L15.0433 33.0966C15.1216 33.1433 15.2299 33.2266 15.4166 33.4833C15.6183 33.76 15.8466 34.1433 16.2099 34.7566L18.3599 33.4833ZM12.9616 32.9016C13.6949 32.915 14.1566 32.925 14.5099 32.9633C14.8399 33 14.9683 33.0533 15.0433 33.0966L16.2999 30.935C15.8333 30.6764 15.3167 30.5207 14.7849 30.4783C14.2883 30.4233 13.6916 30.415 13.0049 30.4033L12.9616 32.9016ZM23.7899 34.7566C24.1533 34.145 24.3816 33.76 24.5833 33.4833C24.7699 33.2266 24.8783 33.1433 24.9566 33.0966L23.6999 30.935C23.2166 31.2183 22.8666 31.5933 22.5633 32.01C22.2749 32.4066 21.9766 32.91 21.6383 33.4833L23.7899 34.7566ZM26.9966 30.4033C26.3099 30.415 25.7116 30.4233 25.2149 30.4783C24.6966 30.5366 24.1883 30.6516 23.6999 30.935L24.9566 33.0966C25.0316 33.0533 25.1599 33 25.4899 32.9633C25.8433 32.925 26.3066 32.9133 27.0399 32.9016L26.9966 30.4033Z"
        fill="#062C8F"
      />
      <path
        opacity="0.5"
        d="M13.3333 18.3333H13.3483M19.9849 18.3333H19.9999M26.6516 18.3333H26.6666"
        stroke="#062C8F"
        stroke-width="3.33333"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};
