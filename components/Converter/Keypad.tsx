import KeypadButton, { ButtonVariant } from "@components/Keypad/Button";
import NumberKeypad from "@components/Keypad/Number";
import { COLORS } from "@constants/theme";
import { Delete } from "lucide-react-native";
import { StyleSheet, View } from "react-native";

export default function Keypad() {
  return (
    <View style={styles.container}>
      <NumberKeypad
        style={styles.numbers}
        onNumberPress={(num) => alert(num)}
        onDecimalPress={() => alert(".")} />
      <View style={styles.actionsContainer}>
        <KeypadButton
          text="AC"
          variant={ButtonVariant.TINTED}
          noAndroidRipple
          style={styles.actionButton} />
        <KeypadButton
          icon={Delete}
          variant={ButtonVariant.TINTED}
          noAndroidRipple
          iconProps={{
            size: 30,
          }}
          style={styles.actionButton} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    flex: 3,
    backgroundColor: COLORS.surface,
  },
  numbers: {
    flex: 4,
  },
  actionsContainer: {
    flex: 1,
    rowGap: 20,
    paddingHorizontal: 12,
    paddingVertical: 20,
  },
  actionButton: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: COLORS.background,
    borderRadius: 32,
  },
});
