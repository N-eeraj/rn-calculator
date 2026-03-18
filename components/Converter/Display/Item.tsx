import { ConverterContext } from "@/contexts/Converter";
import Selection from "@components/Selection";
import { COLORS } from "@constants/theme";
import { use } from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";

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
    <View style={styles.itemContainer}>
      <Selection
        // @ts-ignore
        value={unit}
        // @ts-ignore
        items={units}
        // @ts-ignore
        selectedItemRender={(item) => item.symbol}
        onSelect={onUnitSelect} />

      <Pressable
        style={styles.value}
        onPress={onValueSelect}>
        <Text style={[
          styles.value,
          isActive && styles.activeValue,
          `${value}`.length > 13 && styles.longerValue,
        ]}>
          {value}
        </Text>
      </Pressable>

      <Pressable
        style={styles.unitName}
        onPress={onValueSelect}>
        <Text style={styles.unitName}>
          {name}
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
  unitContainer: {
    flexDirection: "row",
    alignItems: "center",
    columnGap: 4,
    paddingRight: 12,
    paddingVertical: 12,
  },
  unitSymbol: {
    color: COLORS.foreground,
    fontSize: 20,
  },
  activeUnitSelection: {
    color: COLORS.primary,
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
  unitName: {
    width: "100%",
    textAlign: "right",
    color: COLORS.inactive,
    fontSize: 12,
  },
});
