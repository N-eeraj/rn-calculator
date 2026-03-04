import { UnitData } from "@/types";

enum Data {
  BIT,
  BYTE,
  KILOBYTE,
  MEGABYTE,
  GIGABYTE,
  TERABYTE,
  PETABYTE,
}

export const DATA_UNITS: Record<Data, UnitData> = {
  [Data.BIT]: {
    name: "Bit",
    symbol: "b",
  },
  [Data.BYTE]: {
    name: "Byte",
    symbol: "B",
  },
  [Data.KILOBYTE]: {
    name: "Kilobyte",
    symbol: "KB",
  },
  [Data.MEGABYTE]: {
    name: "Megabyte",
    symbol: "MB",
  },
  [Data.GIGABYTE]: {
    name: "Gigabyte",
    symbol: "GB",
  },
  [Data.TERABYTE]: {
    name: "Terabyte",
    symbol: "TB",
  },
  [Data.PETABYTE]: {
    name: "Petabyte",
    symbol: "PB",
  },
};

const DATA_TO_BIT: Record<Data, number> = {
  [Data.BIT]: 1,
  [Data.BYTE]: 8,
  [Data.KILOBYTE]: 8 * 1024,
  [Data.MEGABYTE]: 8 * 1024 * 1024,
  [Data.GIGABYTE]: 8 * 1024 * 1024 * 1024,
  [Data.TERABYTE]: 8 * 1024 * 1024 * 1024 * 1024,
  [Data.PETABYTE]: 8 * 1024 * 1024 * 1024 * 1024 * 1024,
};

export function convertData(from: Data, to: Data, value: number): number {
  if (from === to) return value;
  const valueInBits = value * DATA_TO_BIT[from];
  return valueInBits / DATA_TO_BIT[to];
}
