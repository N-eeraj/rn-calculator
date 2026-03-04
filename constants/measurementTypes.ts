import { MeasurementTypes } from "@/types";
import { AREA_UNITS, convertArea } from "@constants/units/area";
import { BASE_UNITS, convertBase } from "@constants/units/base";
import { convertData, DATA_UNITS } from "@constants/units/data";
import { convertLength, LENGTH_UNITS } from "@constants/units/length";
import { convertMass, MASS_UNITS } from "@constants/units/mass";
import { convertSpeed, SPEED_UNITS } from "@constants/units/speed";
import { convertTemperature, TEMPERATURE_UNITS } from "@constants/units/temperature";
import { convertTime, TIME_UNITS } from "@constants/units/time";
import { convertVolume, VOLUME_UNITS } from "@constants/units/volume";
import { ArrowUpDown, Binary, Box, Clock, Gauge, Ruler, Square, Thermometer, Weight } from "lucide-react-native";

const MEASUREMENT_TYPES = [
  {
    slug: "area",
    text: "Area",
    icon: Square,
    converter: convertArea,
    units: AREA_UNITS,
  },
  {
    slug: "data",
    text: "Data",
    icon: ArrowUpDown,
    converter: convertData,
    units: DATA_UNITS,
  },
  {
    slug: "length",
    text: "Length",
    icon: Ruler,
    converter: convertLength,
    units: LENGTH_UNITS,
  },
  {
    slug: "mass",
    text: "Mass",
    icon: Weight,
    converter: convertMass,
    units: MASS_UNITS,
  },
  {
    slug: "base",
    text: "Numeral System",
    icon: Binary,
    converter: convertBase,
    units: BASE_UNITS,
  },
  {
    slug: "speed",
    text: "Speed",
    icon: Gauge,
    converter: convertSpeed,
    units: SPEED_UNITS,
  },
  {
    slug: "temperature",
    text: "Temperature",
    icon: Thermometer,
    converter: convertTemperature,
    units: TEMPERATURE_UNITS,
  },
  {
    slug: "time",
    text: "Time",
    icon: Clock,
    converter: convertTime,
    units: TIME_UNITS,
  },
  {
    slug: "volume",
    text: "Volume",
    icon: Box,
    converter: convertVolume,
    units: VOLUME_UNITS,
  },
] as const satisfies ReadonlyArray<MeasurementTypes>;

export default MEASUREMENT_TYPES;
