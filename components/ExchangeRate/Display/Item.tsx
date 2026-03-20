import { CurrencyItem } from "@/types";
import Selection from "@components/Selection";
import { COLORS } from "@constants/theme";
import { Pressable, StyleSheet, Text, View } from "react-native";

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
    <View style={styles.itemContainer}>
      <Selection
        // @ts-ignore
        value={currency}
        items={currencies}
        selectionLabel="Select Currency"
        selectedItemRender={({ value }) => value.toUpperCase()}
        // @ts-ignore
        onSelect={setCurrency} />

      <Pressable
        style={styles.value}
        onPress={onTogglePrimary}>
        <Text style={[
          styles.value,
          isActive && styles.activeValue,
          `${value}`.length > 13 && styles.longerValue,
        ]}>
          {value}
        </Text>
      </Pressable>

      <Pressable
        style={styles.currencyName}
        onPress={onTogglePrimary}>
        <Text style={styles.currencyName}>
          {selectedCurrency?.label}
        </Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  itemContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    flexWrap: "wrap",
  },
  value: {
    fontSize: 32,
    flex: 1,
    textAlign: "right",
    color: COLORS.foreground,
  },
  longerValue: {
    fontSize: 24,
  },
  activeValue: {
    color: COLORS.primary,
  },
  currencyName: {
    width: "100%",
    textAlign: "right",
    color: COLORS.inactive,
    fontSize: 12,
  },
});
