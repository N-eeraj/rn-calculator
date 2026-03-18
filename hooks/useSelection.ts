import { BottomSheetModal } from "@gorhom/bottom-sheet";
import { useCallback, useRef, useState } from "react";

interface Item<T extends number | string> {
  label: string;
  value: T;
}
export default function useSelection<T extends number | string>(
  value: number | string,
  items: Array<Item<T>>,
  onSelect: (item: number | string) => void
) {
  const [isSelectionOpen, setIsSelectionOpen] = useState(false);
  const bottomSheetModalRef = useRef<BottomSheetModal>(null);

  const handlePresentModalPress = useCallback(() => {
    bottomSheetModalRef.current?.present();
    setIsSelectionOpen(true);
  }, []);

  const handleCloseModalPress = useCallback(() => {
    bottomSheetModalRef.current?.close();
    setIsSelectionOpen(false);
  }, []);

  const handleSelect = (selection: number | string) => {
    onSelect(selection);
    handleCloseModalPress();
  };

  const currentSelection = items.find((item) => item.value == value);

  return {
    bottomSheetModalRef,
    isSelectionOpen,
    currentSelection,
    handleSelect,
    handlePresentModalPress,
    handleCloseModalPress,
  };
}
