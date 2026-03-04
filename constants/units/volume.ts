import { UnitData } from "@/types";

enum Volume {
  CUBIC_MILLIMETER,
  CUBIC_CENTIMETER,
  CUBIC_METER,
  LITER,
  MILLILITER,
  CUBIC_INCH,
  CUBIC_FOOT,
  CUBIC_YARD,
  GALLON,
}

export const VOLUME_UNITS: Record<Volume, UnitData> = {
  [Volume.CUBIC_MILLIMETER]: {
    name: "Cubic Millimeter",
    symbol: "mm³",
  },
  [Volume.CUBIC_CENTIMETER]: {
    name: "Cubic Centimeter",
    symbol: "cm³",
  },
  [Volume.CUBIC_METER]: {
    name: "Cubic Meter",
    symbol: "m³",
  },
  [Volume.LITER]: {
    name: "Liter",
    symbol: "L",
  },
  [Volume.MILLILITER]: {
    name: "Milliliter",
    symbol: "mL",
  },
  [Volume.CUBIC_INCH]: {
    name: "Cubic Inch",
    symbol: "in³",
  },
  [Volume.CUBIC_FOOT]: {
    name: "Cubic Foot",
    symbol: "ft³",
  },
  [Volume.CUBIC_YARD]: {
    name: "Cubic Yard",
    symbol: "yd³",
  },
  [Volume.GALLON]: {
    name: "Gallon",
    symbol: "gal",
  },
};

const VOLUME_TO_CUBIC_MILLIMETER: Record<Volume, number> = {
  [Volume.CUBIC_MILLIMETER]: 1,
  [Volume.CUBIC_CENTIMETER]: 1_000,
  [Volume.CUBIC_METER]: 1_000_000_000,
  [Volume.LITER]: 1_000_000,
  [Volume.MILLILITER]: 1_000,
  [Volume.CUBIC_INCH]: 16_387.064,
  [Volume.CUBIC_FOOT]: 28_316_846.592,
  [Volume.CUBIC_YARD]: 764_554_857.984,
  [Volume.GALLON]: 3_785_411.784,
};

export function convertVolume(from: Volume, to: Volume, value: number): number {
  if (from === to) return value;
  const valueInCubicMillimeters = value * VOLUME_TO_CUBIC_MILLIMETER[from];
  return valueInCubicMillimeters / VOLUME_TO_CUBIC_MILLIMETER[to];
}
