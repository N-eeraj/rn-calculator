import { BadgeIndianRupee, EqualSquare, LayoutDashboard } from "lucide-react-native";

const NAVIGATION = [
  {
    name: "index",
    Icon: EqualSquare,
  },
  {
    name: "converter/menu",
    Icon: LayoutDashboard,
  },
  {
    name: "exchange-rate",
    Icon: BadgeIndianRupee,
  },
] as const;

export default NAVIGATION;
