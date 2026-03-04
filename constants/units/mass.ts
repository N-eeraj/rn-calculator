import { UnitData } from "@/types";

enum Mass {
  MILLIGRAM,
  GRAM,
  KILOGRAM,
  METRIC_TON,
  OUNCE,
  POUND,
  TON,
}

export const MASS_UNITS: Record<Mass, UnitData> = {
  [Mass.MILLIGRAM]: {
    name: "Milligram",
    symbol: "mg",
  },
  [Mass.GRAM]: {
    name: "Gram",
    symbol: "g",
  },
  [Mass.KILOGRAM]: {
    name: "Kilogram",
    symbol: "kg",
  },
  [Mass.METRIC_TON]: {
    name: "Metric Ton",
    symbol: "t",
  },
  [Mass.OUNCE]: {
    name: "Ounce",
    symbol: "oz",
  },
  [Mass.POUND]: {
    name: "Pound",
    symbol: "lb",
  },
  [Mass.TON]: {
    name: "Ton",
    symbol: "ton",
  },
};

const MASS_TO_MILLIGRAM: Record<Mass, number> = {
  [Mass.MILLIGRAM]: 1,
  [Mass.GRAM]: 1_000,
  [Mass.KILOGRAM]: 1_000_000,
  [Mass.METRIC_TON]: 1_000_000_000,
  [Mass.OUNCE]: 28_349.523125,
  [Mass.POUND]: 453_592.37,
  [Mass.TON]: 907_184_740,
};

export function convertMass(from: Mass, to: Mass, value: number): number {
  if (from === to) return value;
  const valueInMilligrams = value * MASS_TO_MILLIGRAM[from];
  return valueInMilligrams / MASS_TO_MILLIGRAM[to];
}
