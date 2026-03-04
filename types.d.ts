import type { LucideProps } from "lucide-react-native";
import type { ForwardRefExoticComponent } from "react";

export interface MeasurementTypes {
  slug: string;
  text: string;
  icon: ForwardRefExoticComponent<LucideProps>;
  units: Record<string, UnitData>;
  converter: Function;
}

export interface UnitData {
  name: string;
  symbol: string;
}
