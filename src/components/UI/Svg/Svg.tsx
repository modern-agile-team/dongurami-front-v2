import BookMarkSvg from "../../../assets/solar_bookmark-linear.svg";
import CalendarSvg from "../../../assets/solar_calendar-line-duotone.svg";
import ChatDotsSvg from "../../../assets/solar_chat-dots-line-duotone.svg";

interface SvgProps {
  color?: string;
  width: string | 40;
  height: string | 40;
}

export default function Svg() {
  const BookMark: React.FC<SvgProps> = ({ color, width, height }) => {
    return <BookMarkSvg width={width} height={height} />;
  };

  const Calendar: React.FC<SvgProps> = ({ color, width, height }) => {
    return <CalendarSvg width={width} height={height} />;
  };

  const ChatDots: React.FC<SvgProps> = ({ color, width, height }) => {
    return <ChatDotsSvg width={width} height={height} />;
  };

  return {
    BookMark,
    Calendar,
    ChatDots,
  };
}
