import { UnitData } from "@/types";

export enum Base {
  BINARY,
  OCTAL,
  DECIMAL,
  HEXADECIMAL,
}

export const BASE_UNITS: Record<Base, UnitData> = {
  [Base.BINARY]: {
    name: "Binary",
    symbol: "BIN",
  },
  [Base.OCTAL]: {
    name: "Octal",
    symbol: "OCT",
  },
  [Base.DECIMAL]: {
    name: "Decimal",
    symbol: "DEC",
  },
  [Base.HEXADECIMAL]: {
    name: "Hexadecimal",
    symbol: "HEX",
  },
};

const BASE_VALUES: Record<Base, number> = {
  [Base.BINARY]: 2,
  [Base.OCTAL]: 8,
  [Base.DECIMAL]: 10,
  [Base.HEXADECIMAL]: 16,
};

export function convertBase(from: Base, to: Base, value: string): string {
  if (from === to) return value;
  const decimalValue = parseInt(value, BASE_VALUES[from]);
  return decimalValue.toString(BASE_VALUES[to]);
}
