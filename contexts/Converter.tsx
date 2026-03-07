import { UnitData } from "@/types";
import MEASUREMENT_TYPES from "@constants/measurementTypes";
import { ParamListBase, RouteProp, useRoute } from "@react-navigation/native";
import { createContext, useState, type PropsWithChildren } from "react";

interface RouteProps extends RouteProp<ParamListBase> {
  params: {
    slug: string;
  }
}

export interface ConverterContextType {
  measurementType: Partial<typeof MEASUREMENT_TYPES[number]>;
  firstUnit?: string | number;
  fistValue: number | string;
  secondUnit?: string | number;
  secondValue: number | string;
  firstUnitItem: UnitData;
  secondUnitItem: UnitData;
  selectFirst: boolean;
  setFirstUnit: React.Dispatch<React.SetStateAction<number>>;
  setFistValue: React.Dispatch<React.SetStateAction<number | string>>;
  setSecondUnit: React.Dispatch<React.SetStateAction<number>>;
  setSecondValue: React.Dispatch<React.SetStateAction<number | string>>;
  setSelectFirst: React.Dispatch<React.SetStateAction<boolean>>;
}

export const ConverterContext = createContext<ConverterContextType>({
  measurementType: {},
  fistValue: 0,
  secondValue: 0,
  selectFirst: true,
  firstUnitItem: {
    name: "",
    symbol: "",
  },
  secondUnitItem: {
    name: "",
    symbol: "",
  },
  setFirstUnit: () => {},
  setFistValue: () => {},
  setSecondUnit: () => {},
  setSecondValue: () => {},
  setSelectFirst: () => {},
});

export default function ConverterContextProvider({ children }: PropsWithChildren) {
  const {
    params,
  } = useRoute<RouteProps>();
  const measurementType = MEASUREMENT_TYPES.find(({ slug }) => slug === params.slug)!;
  const units = Object.keys(measurementType.units);

  const [firstUnit, setFirstUnit] = useState(units[0]);
  const [fistValue, setFistValue] = useState(0);

  const [secondUnit, setSecondUnit] = useState(units[1]);
  // @ts-ignore
  const [secondValue, setSecondValue] = useState(measurementType.convert(+firstUnit, +secondUnit, 0));

  // @ts-ignore
  const firstUnitItem = measurementType.units[firstUnit];
  // @ts-ignore
  const secondUnitItem = measurementType.units[secondUnit];

  const [selectFirst, setSelectFirst] = useState(true);

  const values = {
    measurementType,
    firstUnit,
    fistValue,
    secondUnit,
    secondValue,
    firstUnitItem,
    secondUnitItem,
    selectFirst,
    setFirstUnit,
    setFistValue,
    setSecondUnit,
    setSecondValue,
    setSelectFirst,
  };

  return (
    // @ts-ignore
    <ConverterContext value={values}>
      {children}
    </ConverterContext>
  );
}
