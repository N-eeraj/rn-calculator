import { ConverterContext } from "@/contexts/Converter";
import { COLORS } from "@constants/theme";
import { BottomSheetModal, BottomSheetView } from "@gorhom/bottom-sheet";
import { ForwardedRef, use } from "react";
import { GestureResponderEvent, Pressable, StyleSheet, Text, View } from "react-native";

interface Props {
  ref: ForwardedRef<BottomSheetModal<any>>;
  onCancel: (event: GestureResponderEvent) => void;
}

export default function UnitSelection({ ref, onCancel }: Props) {
  const {
    measurementType,
  } = use(ConverterContext);
  return (
    <>
      <BottomSheetModal
        ref={ref}
        index={0}>
        <BottomSheetView style={styles.sheetView}>
          <Text style={styles.title}>
            Select Unit
          </Text>
          <View>
            {Object.entries(measurementType.units ?? {}).map(([key, { name, symbol }]) => (
              <Pressable
                key={key}
                style={styles.unitItemButton}>
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
  sheetView: {
    flex: 1,
    rowGap: 20,
    padding: 16,
  },
  title: {
    textAlign: "center",
    fontSize: 18,
    fontWeight: 500,
  },
  unitItemButton: {
    paddingHorizontal: 10,
    paddingVertical: 16,
  },
  unitItemText: {
    fontSize: 18,
    fontWeight: 600,
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
    opacity: 0.75,
  },
});
