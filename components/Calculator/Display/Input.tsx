import { CalculatorContext } from "@contexts/Calculator";
import { use } from "react";
import { Text } from "react-native";

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
      style={{
        fontSize: hasResult ? 24 : 32,
        color: "white",
      }}>
      {value}
    </Text>
  );
}
