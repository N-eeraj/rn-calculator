import { UnitData } from "@/types";
import MEASUREMENT_TYPES from "@constants/measurementTypes";
import { ParamListBase, RouteProp, useRoute } from "@react-navigation/native";
import { createContext, useEffect, useState, type PropsWithChildren } from "react";

interface RouteProps extends RouteProp<ParamListBase> {
  params: {
    slug: string;
  }
}

export interface ConverterContextType {
  measurementType: Partial<typeof MEASUREMENT_TYPES[number]>;
  firstUnit?: string | number;
  firstValue: number | string;
  secondUnit?: string | number;
  secondValue: number | string;
  firstUnitItem: UnitData;
  secondUnitItem: UnitData;
  selectFirst: boolean;
  setFirstUnit: React.Dispatch<React.SetStateAction<number>>;
  setFirstValue: React.Dispatch<React.SetStateAction<number | string>>;
  setSecondUnit: React.Dispatch<React.SetStateAction<number>>;
  setSecondValue: React.Dispatch<React.SetStateAction<number | string>>;
  setSelectFirst: React.Dispatch<React.SetStateAction<boolean>>;
}

export const ConverterContext = createContext<ConverterContextType>({
  measurementType: {},
  firstValue: 0,
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
  setFirstValue: () => {},
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
  const [firstValue, setFirstValue] = useState(0);

  const [secondUnit, setSecondUnit] = useState(units[1]);
  // @ts-ignore
  const [secondValue, setSecondValue] = useState(measurementType.convert(+firstUnit, +secondUnit, 0));

  // @ts-ignore
  const firstUnitItem = measurementType.units[firstUnit];
  // @ts-ignore
  const secondUnitItem = measurementType.units[secondUnit];

  const [selectFirst, setSelectFirst] = useState(true);

  useEffect(() => {
    if (!selectFirst) return;
    // @ts-ignore
    setSecondValue(measurementType.convert(+firstUnit, +secondUnit, firstValue));
  }, [
    firstValue,
    firstUnit,
    secondUnit,
  ]);

  useEffect(() => {
    if (selectFirst) return;
    // @ts-ignore
    setFirstValue(measurementType.convert(+secondUnit, +firstUnit, secondValue));
  }, [
    secondValue,
    firstUnit,
    secondUnit,
  ]);

  const values = {
    measurementType,
    firstUnit,
    firstValue,
    secondUnit,
    secondValue,
    firstUnitItem,
    secondUnitItem,
    selectFirst,
    setFirstUnit,
    setFirstValue,
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
