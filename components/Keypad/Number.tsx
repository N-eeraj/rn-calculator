import KeypadButton from "@components/Keypad/Button";
import { StyleSheet, View, ViewProps } from "react-native";

const KEYPAD = [
  ["7", "8", "9"],
  ["4", "5", "6"],
  ["1", "2", "3"],
  [null, "0", "."],
] as const;

export type Key = NonNullable<typeof KEYPAD[number][number]>;

interface Props extends ViewProps {
  hideDecimal?: boolean;
  disabledKeys?: Array<Key>;
  onNumberPress?: (key: Key) => void;
  onDecimalPress?: () => void;
}

export default function Keypad({
  hideDecimal,
  disabledKeys = [],
  onNumberPress,
  onDecimalPress,
  style,
  ...props
}: Props) {

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
            (key === null || (key === "." && hideDecimal))
              ? <View
                  key={key}
                  style={styles.blank} />
              : <KeypadButton
                  key={key}
                  text={key}
                  disabled={disabledKeys.includes(String(key) as Key)}
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
