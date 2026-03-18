import { COLORS } from "@constants/theme";
import { ConverterContext } from "@contexts/Converter";
import { BottomSheetModal, BottomSheetView } from "@gorhom/bottom-sheet";
import { ForwardedRef, type Key, use } from "react";
import { Pressable, StyleSheet, Text } from "react-native";
import { ScrollView } from "react-native-gesture-handler";

interface Props<T extends number | string> {
  ref: ForwardedRef<BottomSheetModal<any>>;
  items: Array<{
    label: string;
    value: T;
  }>;
  onSelect: (selection: T) => void;
  onCancel: () => void;
}

export default function UnitSelection<T extends number | string>({ ref, items, onSelect, onCancel }: Props<T>) {
  const {
    measurementType,
  } = use(ConverterContext);

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
            {items.map(({ label, value }) => (
              <Pressable
                key={value as Key}
                style={styles.itemButton}
                onPress={() => onSelect(value)}>
                <Text style={styles.itemText}>
                  {label}
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
  itemButton: {
    paddingHorizontal: 10,
    paddingVertical: 16,
  },
  itemText: {
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
