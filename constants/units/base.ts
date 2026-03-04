import { UnitData } from "@/types";

enum BASE {
  BINARY,
  OCTAL,
  DECIMAL,
  HEXADECIMAL,
}

export const BASE_UNITS: Record<BASE, UnitData> = {
  [BASE.BINARY]: {
    name: "Binary",
    symbol: "bin",
  },
  [BASE.OCTAL]: {
    name: "Octal",
    symbol: "oct",
  },
  [BASE.DECIMAL]: {
    name: "Decimal",
    symbol: "dec",
  },
  [BASE.HEXADECIMAL]: {
    name: "Hexadecimal",
    symbol: "hex",
  },
};

const BASE_VALUES: Record<BASE, number> = {
  [BASE.BINARY]: 2,
  [BASE.OCTAL]: 8,
  [BASE.DECIMAL]: 10,
  [BASE.HEXADECIMAL]: 16,
};

export function convertBase(value: string, from: BASE, to: BASE): string {
  if (from === to) return value;
  const decimalValue = parseInt(value, BASE_VALUES[from]);
  return decimalValue.toString(BASE_VALUES[to]);
}
