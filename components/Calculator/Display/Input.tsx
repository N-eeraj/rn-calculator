import { COLORS } from "@constants/theme";
import { CalculatorContext } from "@contexts/Calculator";
import { use } from "react";
import { StyleSheet, Text } from "react-native";

interface Props {
  value: string;
};

export default function Input({ value }: Props) {
  const {
    hasResult,
  } = use(CalculatorContext);

  return (
    <Text
      numberOfLines={1}
      style={[
        styles.input,
        {
          fontSize: hasResult ? 24 : 32,
        },
      ]}>
      {value}
    </Text>
  );
}

const styles = StyleSheet.create({
  input: {
    color: COLORS.foreground,
  },
});
