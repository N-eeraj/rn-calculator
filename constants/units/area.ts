import { UnitData } from "@/types";

enum Area {
  SQUARE_MILLIMETER,
  SQUARE_CENTIMETER,
  SQUARE_METER,
  SQUARE_KILOMETER,
  SQUARE_INCH,
  SQUARE_FOOT,
  SQUARE_YARD,
  ACRE,
  HECTARE,
}

export const AREA_UNITS: Record<Area, UnitData> = {
  [Area.SQUARE_MILLIMETER]: {
    name: "Square Millimeter",
    symbol: "mm²",
  },
  [Area.SQUARE_CENTIMETER]: {
    name: "Square Centimeter",
    symbol: "cm²",
  },
  [Area.SQUARE_METER]: {
    name: "Square Meter",
    symbol: "m²",
  },
  [Area.SQUARE_KILOMETER]: {
    name: "Square Kilometer",
    symbol: "km²",
  },
  [Area.SQUARE_INCH]: {
    name: "Square Inch",
    symbol: "in²",
  },
  [Area.SQUARE_FOOT]: {
    name: "Square Foot",
    symbol: "ft²",
  },
  [Area.SQUARE_YARD]: {
    name: "Square Yard",
    symbol: "yd²",
  },
  [Area.ACRE]: {
    name: "Acre",
    symbol: "ac",
  },
  [Area.HECTARE]: {
    name: "Hectare",
    symbol: "ha",
  },
};

const AREA_TO_SQUARE_MILLIMETER: Record<Area, number> = {
  [Area.SQUARE_MILLIMETER]: 1,
  [Area.SQUARE_CENTIMETER]: 100,
  [Area.SQUARE_METER]: 1_000_000,
  [Area.SQUARE_KILOMETER]: 1_000_000_000_000,
  [Area.SQUARE_INCH]: 645.16,
  [Area.SQUARE_FOOT]: 92_903.04,
  [Area.SQUARE_YARD]: 836_127.36,
  [Area.ACRE]: 4_046_856_422.4,
  [Area.HECTARE]: 10_000_000_000,
};

export function convertArea(from: Area, to: Area, value: number): number {
  if (from === to) return value;
  const valueInSquareMillimeters = value * AREA_TO_SQUARE_MILLIMETER[from];
  return valueInSquareMillimeters / AREA_TO_SQUARE_MILLIMETER[to];
}
