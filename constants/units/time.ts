import { UnitData } from "@/types";

enum Time {
  PICOSECOND,
  MICROSECOND,
  MILLISECOND,
  SECOND,
  MINUTE,
  HOUR,
  DAY,
  WEEK,
  MONTH,
  YEAR,
}

export const TIME_UNITS: Record<Time, UnitData> = {
  [Time.PICOSECOND]: {
    name: "Picosecond",
    symbol: "ps",
  },
  [Time.MICROSECOND]: {
    name: "Microsecond",
    symbol: "µs",
  },
  [Time.MILLISECOND]: {
    name: "Millisecond",
    symbol: "ms",
  },
  [Time.SECOND]: {
    name: "Second",
    symbol: "s",
  },
  [Time.MINUTE]: {
    name: "Minute",
    symbol: "min",
  },
  [Time.HOUR]: {
    name: "Hour",
    symbol: "h",
  },
  [Time.DAY]: {
    name: "Day",
    symbol: "d",
  },
  [Time.WEEK]: {
    name: "Week",
    symbol: "wk",
  },
  [Time.MONTH]: {
    name: "Month",
    symbol: "mo",
  },
  [Time.YEAR]: {
    name: "Year",
    symbol: "yr",
  },
};

const TIME_TO_MILLISECOND: Record<Time, number> = {
  [Time.PICOSECOND]: 0.000_000_001,
  [Time.MICROSECOND]: 0.001,
  [Time.MILLISECOND]: 1,
  [Time.SECOND]: 1_000,
  [Time.MINUTE]: 60_000,
  [Time.HOUR]: 3_600_000,
  [Time.DAY]: 86_400_000,
  [Time.WEEK]: 604_800_000,
  [Time.MONTH]: 2_629_746_000,
  [Time.YEAR]: 31_556_952_000,
};

export function convertTime(from: Time, to: Time, value: number): number {
  if (from === to) return value;
  const valueInMilliseconds = value * TIME_TO_MILLISECOND[from];
  return valueInMilliseconds / TIME_TO_MILLISECOND[to];
}
