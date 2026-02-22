import { Pressable, Text } from "react-native";

interface Props {
  title: string;
  color?: string;
  backgroundColor?: string;
}

export default function KeypadButton({
  title,
  color = "white",
  backgroundColor = "transparent",
}: Props) {
  return (
    <Pressable
      style={{
        flex: 1,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor,
        borderRadius: 12,
      }}>
      <Text
        style={{
          padding: 12,
          color,
          fontSize: 28,
          textAlign: "center",
        }}>
        {title}
      </Text>
    </Pressable>
  );
}
