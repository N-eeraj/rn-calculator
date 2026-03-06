import { ConverterContext } from "@/contexts/Converter";
import { COLORS } from "@constants/theme";
import { BottomSheetModal, BottomSheetView } from "@gorhom/bottom-sheet";
import { ForwardedRef, use } from "react";
import { GestureResponderEvent, Pressable, StyleSheet, Text, View } from "react-native";

interface Props {
  ref: ForwardedRef<BottomSheetModal<any>>;
  onSelect: (unit: number) => void;
  onCancel: (event: GestureResponderEvent) => void;
}

export default function UnitSelection({ ref, onSelect, onCancel }: Props) {
  const {
    measurementType,
  } = use(ConverterContext);
  return (
    <>
      <BottomSheetModal
        ref={ref}
        index={0}
        handleStyle={styles.handle}
        handleIndicatorStyle={styles.handleIndicator}>
        <BottomSheetView style={styles.sheetView}>
          <Text style={styles.title}>
            Select Unit
          </Text>
          <View>
            {Object.entries(measurementType.units ?? {}).map(([unit, { name, symbol }]) => (
              <Pressable
                key={unit}
                style={styles.unitItemButton}
                onPress={() => onSelect(+unit)}>
                <Text style={styles.unitItemText}>
                  {name} {symbol}
                </Text>
              </Pressable>
            ))}
          </View>
          <Pressable
            style={styles.cancelButton}
            onPress={onCancel}>
            <Text style={styles.cancelText}>
              Cancel
            </Text>
          </Pressable>
        </BottomSheetView>
      </BottomSheetModal>
    </>
  );
}

const styles = StyleSheet.create({
  handle: {
    height: 0,
    backgroundColor: COLORS.background,
  },
  handleIndicator: {
    backgroundColor: COLORS.inactive,
  },
  sheetView: {
    flex: 1,
    rowGap: 20,
    padding: 16,
    backgroundColor: COLORS.background,
  },
  title: {
    textAlign: "center",
    fontSize: 18,
    fontWeight: 500,
    color: COLORS.foreground,
  },
  unitItemButton: {
    paddingHorizontal: 10,
    paddingVertical: 16,
  },
  unitItemText: {
    fontSize: 18,
    fontWeight: 600,
    color: COLORS.foreground,
  },
  cancelButton: {
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    backgroundColor: COLORS.surface,
    padding: 16,
    borderRadius: 100,
  },
  cancelText: {
    color: COLORS.foreground,
    opacity: 0.75,
  },
});
