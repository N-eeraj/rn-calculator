import { AppContext } from "@/app/context";
import { use } from "react";
import { Text } from "react-native";

interface Props {
  value: string;
};

export default function Input({ value }: Props) {
  const {
    hasResult,
  } = use(AppContext);

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
