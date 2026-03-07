import { BottomSheetModal } from "@gorhom/bottom-sheet";
import { useCallback, useRef, useState } from "react";

export default function useDisplay(onUnitSelect: (unit: number) => void) {
  const [isUnitSelectionOpen, setIsUnitSelectionOpen] = useState(false);
  const bottomSheetModalRef = useRef<BottomSheetModal>(null);

  const handlePresentModalPress = useCallback(() => {
    bottomSheetModalRef.current?.present();
    setIsUnitSelectionOpen(true);
  }, []);

  const handleCloseModalPress = useCallback(() => {
    bottomSheetModalRef.current?.close();
    setIsUnitSelectionOpen(false);
  }, []);

  const handleUnitSelect = (selection: number) => {
    onUnitSelect(selection);
    handleCloseModalPress();
  };

  return {
    bottomSheetModalRef,
    isUnitSelectionOpen,
    handlePresentModalPress,
    handleCloseModalPress,
    handleUnitSelect,
  };
}
