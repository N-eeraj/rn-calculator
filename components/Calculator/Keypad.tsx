import { COLORS } from "@/constants/theme";
import KeypadButton, { ButtonVariant } from "@components/Keypad/Button";
import NumberKeypad from "@components/Keypad/Number";
import useKeypadButtons from "@hooks/useKeypadButtons";
import { Delete, Divide, Equal, Minus, Percent, Plus, X } from 'lucide-react-native';
import { StyleSheet, View } from "react-native";

const OPERATORS = [
  {
    Icon: Divide,
    operator: "÷",
  },
  {
    Icon: X,
    operator: "×",
  },
  {
    Icon: Minus,
    operator: "-",
  },
  {
    Icon: Plus,
    operator: "+",
  },
] as const;

export default function Keypad() {
  const {
    handleValuePress,
    handleDecimalPress,
    handleOperatorPress,
    handleEquatePress,
    handleClearDisplay,
    handleDeletePress,
    handlePercentagePress,
  } = useKeypadButtons();

  return (
    <View style={styles.container}>
      <View style={styles.rowContainer}>
        {/* clear, delete and percentage */}
        <View style={styles.specials}>
          <KeypadButton
            text="C"
            variant={ButtonVariant.TINTED}
            onPress={handleClearDisplay} />
          <KeypadButton
            icon={Delete}
            variant={ButtonVariant.TINTED}
            onPress={handleDeletePress} />
          <KeypadButton
            icon={Percent}
            variant={ButtonVariant.TINTED}
            onPress={handlePercentagePress} />
        </View>

        <NumberKeypad
          style={styles.numbers}
          onNumberPress={handleValuePress}
          onDecimalPress={handleDecimalPress} />
      </View>

      {/* operators and equals */}
      <View style={styles.operators}>
        {OPERATORS.map(({ Icon, operator }) => (
          <KeypadButton
            key={operator}
            icon={Icon}
            variant={ButtonVariant.TINTED}
            onPress={() => handleOperatorPress(operator)} />
        ))}
        <KeypadButton
          icon={Equal}
          variant={ButtonVariant.SOLID}
          onPress={handleEquatePress} />
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
  rowContainer: {
    flex: 3,
  },
  specials: {
    flex: 1,
    flexDirection: "row",
  },
  operators: {
    flex: 1,
    height: "100%",
  },
  numbers: {
    flex: 4,
  },
});
