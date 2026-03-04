import { UnitData } from "@/types";

enum Temperature {
  CELSIUS,
  FAHRENHEIT,
  KELVIN,
}

export const TEMPERATURE_UNITS: Record<Temperature, UnitData> = {
  [Temperature.CELSIUS]: {
    name: "Celsius",
    symbol: "°C",
  },
  [Temperature.FAHRENHEIT]: {
    name: "Fahrenheit",
    symbol: "°F",
  },
  [Temperature.KELVIN]: {
    name: "Kelvin",
    symbol: "K",
  },
};

export function convertTemperature(from: Temperature, to: Temperature, value: number): number {
  if (from === to) return value;

  let valueInCelsius: number;

  switch (from) {
    case Temperature.CELSIUS:
      valueInCelsius = value;
      break;
    case Temperature.FAHRENHEIT:
      valueInCelsius = (value - 32) * (5 / 9);
      break;
    case Temperature.KELVIN:
      valueInCelsius = value - 273.15;
      break;
  }

  switch (to) {
    case Temperature.CELSIUS:
      return valueInCelsius;
    case Temperature.FAHRENHEIT:
      return valueInCelsius * (9 / 5) + 32;
    case Temperature.KELVIN:
      return valueInCelsius + 273.15;
  }
}
