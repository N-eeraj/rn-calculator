import { UnitData } from "@/types";

enum Speed {
  METER_PER_SECOND,
  KILOMETER_PER_HOUR,
  MILE_PER_HOUR,
  FOOT_PER_SECOND,
  KNOT,
}

export const SPEED_UNITS: Record<Speed, UnitData> = {
  [Speed.METER_PER_SECOND]: {
    name: "Meter per Second",
    symbol: "m/s",
  },
  [Speed.KILOMETER_PER_HOUR]: {
    name: "Kilometer per Hour",
    symbol: "km/h",
  },
  [Speed.MILE_PER_HOUR]: {
    name: "Mile per Hour",
    symbol: "mph",
  },
  [Speed.FOOT_PER_SECOND]: {
    name: "Foot per Second",
    symbol: "ft/s",
  },
  [Speed.KNOT]: {
    name: "Knot",
    symbol: "kn",
  },
};

const SPEED_TO_MPS: Record<Speed, number> = {
  [Speed.METER_PER_SECOND]: 1,
  [Speed.KILOMETER_PER_HOUR]: 0.277777778,
  [Speed.MILE_PER_HOUR]: 0.44704,
  [Speed.FOOT_PER_SECOND]: 0.3048,
  [Speed.KNOT]: 0.514444,
};

export function convertSpeed(from: Speed, to: Speed, value: number): number {
  if (from === to) return value;
  const valueInMPS = value * SPEED_TO_MPS[from];
  return valueInMPS / SPEED_TO_MPS[to];
}
