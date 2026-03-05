import { COLORS } from "@constants/theme";
import { BottomSheetModal } from "@gorhom/bottom-sheet";
import { ChevronDown } from "lucide-react-native";
import { useCallback, useRef } from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";
import UnitSelection from "./UnitSelection";

interface Props {
  symbol: string;
  name: string;
  value: number | string;
  isActive: boolean;
  onSelect: () => void;
}

export default function DisplayItem({ name, symbol, isActive, value, onSelect }: Props) {
  const bottomSheetModalRef = useRef<BottomSheetModal>(null);

  const handlePresentModalPress = useCallback(() => {
    bottomSheetModalRef.current?.present();
  }, []);

  const handleCloseModalPress = useCallback(() => {
    bottomSheetModalRef.current?.close();
  }, []);

  return (
    <View style={styles.itemContainer}>
      <Pressable
        style={styles.unitContainer}
        onPress={handlePresentModalPress}>
        <Text style={styles.unitSymbol}>
          {symbol}
        </Text>
        <ChevronDown
          size={16}
          color={COLORS.foreground} />
      </Pressable>

      <UnitSelection
        ref={bottomSheetModalRef}
        onCancel={handleCloseModalPress} />

      <Pressable
        style={styles.value}
        onPress={onSelect}>
        <Text style={[styles.value, isActive && styles.activeValue]}>
          {value}
        </Text>
      </Pressable>

      <Pressable
        style={styles.unitName}
        onPress={onSelect}>
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
