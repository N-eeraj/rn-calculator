import {
  Pressable,
  Text,
  type PressableProps,
} from "react-native";

export type ButtonVariant = "text" | "tinted" | "solid";

interface Props {
  title: string;
  variant?: ButtonVariant;
  onPress?: PressableProps["onPress"];
}

export default function KeypadButton({
  title,
  variant = "text",
  onPress,
}: Props) {
  let color, backgroundColor;
  switch(variant) {
    case "text":
      color = "white";
      backgroundColor = "transparent";
      break;
    case "tinted":
      color = "#0af";
      backgroundColor = "transparent";
      break;
    case "solid":
      color = "white";
      backgroundColor = "#0af";
      break;
  }

  return (
    <Pressable
      style={{
        flex: 1,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor,
        borderRadius: 12,
      }}
      onPress={(event) => onPress?.(event)}>
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
