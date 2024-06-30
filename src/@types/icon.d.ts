import * as IconList from "@/components/Svg/Icons";

declare global {
  namespace Icon {
    type Name = keyof typeof IconList;
  }
}
