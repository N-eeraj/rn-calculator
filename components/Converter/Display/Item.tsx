import UnitSelection from "@components/Converter/Display/UnitSelection";
import { COLORS } from "@constants/theme";
import useDisplay from "@hooks/converter/useDisplay";
import { ChevronDown } from "lucide-react-native";
import { Pressable, StyleSheet, Text, View } from "react-native";

interface Props {
  symbol: string;
  name: string;
  value: number | string;
  isActive: boolean;
  onUnitSelect: (unit: number) => void;
  onValueSelect: () => void;
}

export default function DisplayItem({ name, symbol, isActive, value, onUnitSelect, onValueSelect }: Props) {
  const {
    bottomSheetModalRef,
    isUnitSelectionOpen,
    handlePresentModalPress,
    handleCloseModalPress,
    handleUnitSelect,
  } = useDisplay(onUnitSelect);

  return (
    <View style={styles.itemContainer}>
      <Pressable
        style={styles.unitContainer}
        onPress={handlePresentModalPress}>
        <Text style={[
          styles.unitSymbol,
          isUnitSelectionOpen && styles.activeUnitSelection,
        ]}>
          {symbol}
        </Text>
        <ChevronDown
          size={16}
          color={COLORS[isUnitSelectionOpen ? "primary" : "foreground"]} />
      </Pressable>

      <UnitSelection
        ref={bottomSheetModalRef}
        onSelect={handleUnitSelect}
        onCancel={handleCloseModalPress} />

      <Pressable
        style={styles.value}
        onPress={onValueSelect}>
        <Text style={[styles.value, isActive && styles.activeValue]}>
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
  activeValue: {
    color: COLORS.primary,
  },
  unitName: {
    width: "100%",
    textAlign: "right",
    color: COLORS.inactive,
    fontSize: 12,
  },
  bottomSheetView: {
    height: 500,
    padding: 24,
  },
});
