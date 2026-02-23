import {
  Pressable,
  PressableProps,
  Text
} from "react-native";

interface Props {
  title: string;
  color?: string;
  backgroundColor?: string;
  onPress?: PressableProps["onPress"];
}

export default function KeypadButton({
  title,
  color = "white",
  backgroundColor = "transparent",
  onPress,
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
