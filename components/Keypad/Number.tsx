import KeypadButton from "@components/Keypad/Button";
import { StyleSheet, View, ViewProps } from "react-native";

const KEYPAD = [
  ["7", "8", "9"],
  ["4", "5", "6"],
  ["1", "2", "3"],
  [null, "0", "."],
] as const;

interface Props extends ViewProps {
  onNumberPress?: (_key: NonNullable<typeof KEYPAD[number][number]>) => void;
  onDecimalPress?: () => void;
}

export default function Keypad({ onNumberPress, onDecimalPress, style, ...props}: Props) {
  return (
    <View
      style={[
        styles.container,
        style,
      ]}
      {...props}>
      {KEYPAD.map((row, index) => (
        <View
          key={index}
          style={styles.row}>
          {row.map((key) => (
            key === null
              ? <View
                  key={key}
                  style={styles.blank} />
              : <KeypadButton
                  key={key}
                  text={key}
                  onPress={() => key === "." ? onDecimalPress?.() : onNumberPress?.(key)} />
          ))}
        </View>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  row: {
    flex: 1,
    flexDirection: "row",
  },
  blank: {
    flex: 1,
  },
});
