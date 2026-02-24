import Button, { ButtonVariant } from "@/components/Keypad/Button";
import useKeypadButtons from "@/hooks/useKeypadButtons";
import { View } from "react-native";

export default function Keypad() {
  const {
    handleValuePress,
    handleOperatorPress,
    handleDecimalPress,
    handleDeletePress,
    handleClearDisplay,
    handlePercentagePress,
    handleEquatePress,
  } = useKeypadButtons();

  const KEYS = [
    [
      { title: "C", variant: ButtonVariant.TINTED, onPress: handleClearDisplay },
      { title: "⌫", variant: ButtonVariant.TINTED, onPress: handleDeletePress },
      { title: "%", variant: ButtonVariant.TINTED, onPress: handlePercentagePress },
      { title: "÷", variant: ButtonVariant.TINTED, onPress: () => handleOperatorPress("÷") },
    ],
    [
      { title: "7", variant: ButtonVariant.TEXT, onPress: () => handleValuePress("7") },
      { title: "8", variant: ButtonVariant.TEXT, onPress: () => handleValuePress("8") },
      { title: "9", variant: ButtonVariant.TEXT, onPress: () => handleValuePress("9") },
      { title: "×", variant: ButtonVariant.TINTED, onPress: () => handleOperatorPress("×") },
    ],
    [
      { title: "4", variant: ButtonVariant.TEXT, onPress: () => handleValuePress("4") },
      { title: "5", variant: ButtonVariant.TEXT, onPress: () => handleValuePress("5") },
      { title: "6", variant: ButtonVariant.TEXT, onPress: () => handleValuePress("6") },
      { title: "-", variant: ButtonVariant.TINTED, onPress: () => handleOperatorPress("-") },
    ],
    [
      { title: "1", variant: ButtonVariant.TEXT, onPress: () => handleValuePress("1") },
      { title: "2", variant: ButtonVariant.TEXT, onPress: () => handleValuePress("2") },
      { title: "3", variant: ButtonVariant.TEXT, onPress: () => handleValuePress("3") },
      { title: "+", variant: ButtonVariant.TINTED, onPress: () => handleOperatorPress("+") },
    ],
    [
      undefined,
      { title: "0", variant: ButtonVariant.TEXT, onPress: () => handleValuePress("0") },
      { title: ".", variant: ButtonVariant.TEXT, onPress: handleDecimalPress },
      { title: "=", variant: ButtonVariant.SOLID, onPress: handleEquatePress },
    ],
  ] as const;

  return (
    <View
      style={{
        flex: 3,
        display: "flex",
        gap: 4,
        backgroundColor: "#171717",
      }}>

      {KEYS.map((keys, rowIndex) => (
        <View
          key={rowIndex}
          style={{
            display: "flex",
            flex: 1,
            flexDirection: "row",
            justifyContent: "flex-end",
            columnGap: 12,
          }}>
          {keys.map((key, columnIndex) => (
            key
            ?  <Button
                key={`${rowIndex}.${columnIndex}`}
                {...key} />
            : <View
                key={`${rowIndex}.${columnIndex}`}
                style={{ flex: 1 }} />
          ))}
        </View>
      ))}
    </View>
  );
}
