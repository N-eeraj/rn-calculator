import type { LucideProps } from "lucide-react-native";
import type { ForwardRefExoticComponent } from "react";

export interface MeasurementTypes {
  slug: string;
  text: string;
  icon: ForwardRefExoticComponent<LucideProps>;
  units: Record<string, UnitData>;
  convert: Function;
}

export interface UnitData {
  name: string;
  symbol: string;
}

export interface CurrencyItem {
  code: string;
  name: string;
}
export interface Rates {
  [key: CurrencyItem["code"]]: number;
}