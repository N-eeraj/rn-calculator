import { COLORS } from "@/constants/theme";
import { CurrencyItem } from "@/types";
import ConversionDisplayItem from "@components/ConversionDisplayItem";
import { StyleSheet, Text, View } from "react-native";

interface Props {
  currency: CurrencyItem["code"];
  value: number | string;
  currencies: Array<{
    value: CurrencyItem["code"];
    label: CurrencyItem["name"];
  }>;
  isActive: boolean;
  isLoading?: boolean;
  setCurrency: (selection: CurrencyItem["code"]) => void;
  onTogglePrimary: () => void;
}

export default function DisplayItem({
  currency,
  value,
  currencies,
  isActive,
  isLoading = false,
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
      loadingState={
        isLoading
          ? (
            <View style={styles.loadingContainer}>
              <Text style={styles.loadingText}>
                Loading Exchange Rates
              </Text>
            </View>
          )
          : undefined
      }
      onItemClick={onTogglePrimary} />
  );
}

const styles = StyleSheet.create({
  loadingContainer: {
    minHeight: 68,
    justifyContent: "center",
  },
  loadingText: {
    color: COLORS.inactive,
    fontSize: 12,
  },
})
