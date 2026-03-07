import KeypadButton, { ButtonVariant } from "@components/Keypad/Button";
import NumberKeypad, { type Key } from "@components/Keypad/Number";
import { COLORS } from "@constants/theme";
import useKeypad from "@hooks/converter/useKeypad";
import { Delete } from "lucide-react-native";
import { Fragment } from "react";
import { StyleSheet, View } from "react-native";

export default function Keypad() {
  const {
    isBaseMeasurement,
    disabledKeys,
    handleInput,
    handleClear,
    handleDelete,
    isBaseHexUnit,
  } = useKeypad();

  const NumberWrapper = isBaseMeasurement ? View : Fragment;
  const NumberWrapperProps = isBaseMeasurement ? { style: styles.numberWrapper } : {};

  return (
    <View style={[
      styles.container,
      isBaseMeasurement && styles.hexContainer,
    ]}>
      <NumberWrapper {
        ...NumberWrapperProps
      }>
        <NumberKeypad
          hideDecimal={isBaseMeasurement}
          disabledKeys={disabledKeys as Array<Key>}
          style={[
            styles.numbers,
            isBaseMeasurement && styles.hexNumbers,
          ]}
          onNumberPress={handleInput}
          onDecimalPress={() => handleInput(".")} />
        {isBaseMeasurement && (
          <View style={styles.hexLettersContainer}>
            <KeypadButton
              text="D"
              disabled={!isBaseHexUnit}
              onPress={() => handleInput("D")} />
            <KeypadButton
              text="C"
              disabled={!isBaseHexUnit}
              onPress={() => handleInput("C")} />
            <KeypadButton
              text="B"
              disabled={!isBaseHexUnit}
              onPress={() => handleInput("B")} />
            <KeypadButton
              text="A"
              disabled={!isBaseHexUnit}
              onPress={() => handleInput("A")} />
          </View>
        )}
      </NumberWrapper>

      <View
        style={[
          styles.actionsContainer,
          isBaseMeasurement && styles.hexActionsContainer,
        ]}>
        <KeypadButton
          text="AC"
          variant={ButtonVariant.TINTED}
          noAndroidRipple={!isBaseMeasurement}
          style={[
            styles.actionButton,
            isBaseMeasurement && styles.hexActionButton,
          ]}
          onPress={handleClear} />

        <KeypadButton
          icon={Delete}
          variant={ButtonVariant.TINTED}
          noAndroidRipple={!isBaseMeasurement}
          iconProps={{
            size: 30,
          }}
          style={[
            styles.actionButton,
            isBaseMeasurement && styles.hexActionButton,
          ]}
          onPress={handleDelete} />

        {isBaseMeasurement && (
          <>
            <KeypadButton
              text="F"
              disabled={!isBaseHexUnit}
              style={styles.actionHexLetter}
              onPress={() => handleInput("F")} />
            <KeypadButton
              text="E"
              disabled={!isBaseHexUnit}
              style={styles.actionHexLetter}
              onPress={() => handleInput("E")} />
          </>
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    flex: 3,
    backgroundColor: COLORS.surface,
    gap: 0,
  },
  hexContainer: {
    flexDirection: "column-reverse",
  },
  numberWrapper: {
    flexDirection: "row",
    flex: 4,
  },
  numbers: {
    flex: 4,
  },
  hexNumbers: {
    flex: 3,
  },
  hexLettersContainer: {
    flex: 1,
  },
  actionsContainer: {
    flex: 1,
    rowGap: 20,
    paddingHorizontal: 12,
    paddingVertical: 20,
  },
  hexActionsContainer: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 0,
    paddingVertical: 0,
  },
  actionButton: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: COLORS.background,
    borderRadius: 32,
  },
  hexActionButton: {
    backgroundColor: "transparent",
  },
  actionHexLetter: {
    flex: 1,
  },
});
