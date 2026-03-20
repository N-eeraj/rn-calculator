import ConversionDisplayItem from "@components/ConversionDisplayItem";
import { ConverterContext } from "@contexts/Converter";
import { use } from "react";

interface Props {
  symbol: string;
  name: string;
  value: number | string;
  unit: number | string;
  isActive: boolean;
  onUnitSelect: (unit: number) => void;
  onValueSelect: () => void;
}

export default function DisplayItem({ name, isActive, value, unit, onUnitSelect, onValueSelect }: Props) {
  const {
    measurementType,
  } = use(ConverterContext);
  const units = Object.entries(measurementType.units ?? {})
    .map(([value, { name, symbol }]) => ({
      value,
      label: `${name} (${symbol})`,
      name,
      symbol,
    }));

  return (
    <ConversionDisplayItem
      value={value}
      label={name}
      isActive={isActive}
      selectionProps={{
        value: unit,
        items: units,
        selectionLabel: "Select Unit",
        // @ts-ignore
        selectedItemRender: (item) => item.symbol,
        // @ts-ignore
        onSelect: onUnitSelect,
      }}
      onItemClick={onValueSelect} />
  );
}
