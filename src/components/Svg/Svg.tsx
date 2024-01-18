import CalendarSvg from "../../assets/solar_calendar-line-duotone.svg";
import ChatDotsSvg from "../../assets/solar_chat-dots-line-duotone.svg";
import { SvgProps } from "./type";

export const Calendar = ({ color, size }: SvgProps) => {
  return <CalendarSvg width={size} height={size} />;
};

export const ChatDots = ({ color, size }: SvgProps) => {
  return <ChatDotsSvg width={size} height={size} />;
};
