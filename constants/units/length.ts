import { UnitData } from "@/types";

enum Length {
  MILLIMETER,
  CENTIMETER,
  METER,
  KILOMETER,
  INCH,
  FOOT,
  YARD,
  MILE,
}

export const LENGTH_UNITS: Record<Length, UnitData> = {
  [Length.MILLIMETER]: {
    name: "Millimeter",
    symbol: "mm",
  },
  [Length.CENTIMETER]: {
    name: "Centimeter",
    symbol: "cm",
  },
  [Length.METER]: {
    name: "Meter",
    symbol: "m",
  },
  [Length.KILOMETER]: {
    name: "Kilometer",
    symbol: "km",
  },
  [Length.INCH]: {
    name: "Inch",
    symbol: "in",
  },
  [Length.FOOT]: {
    name: "Foot",
    symbol: "ft",
  },
  [Length.YARD]: {
    name: "Yard",
    symbol: "yd",
  },
  [Length.MILE]: {
    name: "Mile",
    symbol: "mi",
  },
};

const LENGTH_TO_MILLIMETER: Record<Length, number> = {
  [Length.MILLIMETER]: 1,
  [Length.CENTIMETER]: 10,
  [Length.METER]: 1000,
  [Length.KILOMETER]: 1_000_000,
  [Length.INCH]: 25.4,
  [Length.FOOT]: 304.8,
  [Length.YARD]: 914.4,
  [Length.MILE]: 1_609_344,
};

export function convertLength(
  from: Length,
  to: Length,
  value: number
): number {
  if (from === to) return value;
  const valueInMillimeters = value * LENGTH_TO_MILLIMETER[from];
  return valueInMillimeters / LENGTH_TO_MILLIMETER[to];
}
