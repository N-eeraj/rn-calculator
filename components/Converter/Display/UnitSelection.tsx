import { COLORS } from "@constants/theme";
import { ConverterContext } from "@contexts/Converter";
import { BottomSheetModal, BottomSheetView } from "@gorhom/bottom-sheet";
import { ForwardedRef, use } from "react";
import { Pressable, StyleSheet, Text } from "react-native";
import { ScrollView } from "react-native-gesture-handler";

interface Props {
  ref: ForwardedRef<BottomSheetModal<any>>;
  onSelect: (unit: number) => void;
  onCancel: () => void;
}

export default function UnitSelection({ ref, onSelect, onCancel }: Props) {
  const {
    measurementType,
  } = use(ConverterContext);
  const units = Object.entries(measurementType.units ?? {});

  return (
    <>
      <BottomSheetModal
        ref={ref}
        index={0}
        handleStyle={styles.handle}
        handleIndicatorStyle={styles.handleIndicator}
        onDismiss={onCancel}>
        <BottomSheetView style={styles.sheetView}>
          <Text style={styles.title}>
            Select Unit
          </Text>
          <ScrollView style={styles.scrollView}>
            {units.map(([unit, { name, symbol }]) => (
              <Pressable
                key={unit}
                style={styles.unitItemButton}
                onPress={() => onSelect(+unit)}>
                <Text style={styles.unitItemText}>
                  {name} {symbol}
                </Text>
              </Pressable>
            ))}
          </ScrollView>
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
  scrollView: {
    maxHeight: 360,
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
