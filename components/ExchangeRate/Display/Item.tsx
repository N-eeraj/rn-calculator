import { CurrencyItem } from "@/types";
import ConversionDisplayItem from "@components/ConversionDisplayItem";

interface Props {
  currency: CurrencyItem["code"];
  value: number | string;
  currencies: Array<{
    value: CurrencyItem["code"];
    label: CurrencyItem["name"];
  }>;
  isActive: boolean;
  setCurrency: (selection: CurrencyItem["code"]) => void;
  onTogglePrimary: () => void;
}

export default function DisplayItem({
  currency,
  value,
  currencies,
  isActive,
  setCurrency,
  onTogglePrimary,
}: Props) {
  const selectedCurrency = currencies.find(({ value }) => value === currency);

  return (
    <ConversionDisplayItem
      value={value}
      label={selectedCurrency?.label}
      isActive={isActive}
      selectionProps={{
        value: currency,
        items: currencies,
        selectionLabel: "Select Currency",
        selectedItemRender: ({ value }) => String(value).toUpperCase(),
        // @ts-ignore
        onSelect: setCurrency,
      }}
      onItemClick={onTogglePrimary} />
  );
}
