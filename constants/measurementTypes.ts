import { ArrowUpDown, Binary, Box, Clock, Gauge, Ruler, Square, Thermometer, Weight } from "lucide-react-native";

const MEASUREMENT_TYPES = [
  {
    slug: "area",
    text: "Area",
    icon: Square,
  },
  {
    slug: "data",
    text: "Data",
    icon: ArrowUpDown,
  },
  {
    slug: "length",
    text: "Length",
    icon: Ruler,
  },
  {
    slug: "mass",
    text: "Mass",
    icon: Weight,
  },
  {
    slug: "base",
    text: "Numeral System",
    icon: Binary,
  },
  {
    slug: "speed",
    text: "Speed",
    icon: Gauge,
  },
  {
    slug: "temperature",
    text: "Temperature",
    icon: Thermometer,
  },
  {
    slug: "time",
    text: "Time",
    icon: Clock,
  },
  {
    slug: "volume",
    text: "Volume",
    icon: Box,
  },
] as const;

export default MEASUREMENT_TYPES;
