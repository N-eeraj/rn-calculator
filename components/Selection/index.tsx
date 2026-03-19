import BottomSheet from "@components/Selection/BottomSheet";
import { COLORS } from "@constants/theme";
import useSelection from "@hooks/useSelection";
import { ChevronDown } from "lucide-react-native";
import { type ReactNode } from "react";
import { Pressable, StyleSheet, Text } from "react-native";

interface Item<T extends number | string> {
  label: string;
  value: T;
}
interface Props<T extends number | string> {
  value: T;
  selectedItemRender?: (item: Item<T>) => ReactNode;
  items: Array<Item<T>>;
  selectionLabel: string;
  onSelect: (item: T) => void;
}

export default function Selection<T extends number | string>({
  value,
  selectionLabel,
  items,
  selectedItemRender,
  onSelect,
}: Props<T>) {
  const {
    bottomSheetModalRef,
    isSelectionOpen,
    currentSelection,
    handleSelect,
    handlePresentModalPress,
    handleCloseModalPress,
    // @ts-ignore
  } = useSelection(value, items, onSelect);

  return (
    <>
      <Pressable
        style={styles.pressableContainer}
        onPress={handlePresentModalPress}>
        <Text style={[
          styles.selectedItem,
          isSelectionOpen && styles.activeItemSelection,
        ]}>
          {
            (selectedItemRender && currentSelection)
              ? selectedItemRender?.(currentSelection)
              : currentSelection?.label
          }
        </Text>
        <ChevronDown
          size={16}
          color={COLORS[isSelectionOpen ? "primary" : "foreground"]} />
      </Pressable>

      <BottomSheet
        ref={bottomSheetModalRef}
        items={items}
        label={selectionLabel}
        onSelect={handleSelect}
        onCancel={handleCloseModalPress} />
    </>
  );
}

const styles = StyleSheet.create({
  pressableContainer: {
    flexDirection: "row",
    alignItems: "center",
    columnGap: 4,
    paddingRight: 12,
    paddingVertical: 12,
  },
  selectedItem: {
    color: COLORS.foreground,
    fontSize: 20,
  },
  activeItemSelection: {
    color: COLORS.primary,
  },
});
