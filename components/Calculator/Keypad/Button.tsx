import {
  Pressable,
  Text,
  type PressableProps,
} from "react-native";

export enum ButtonVariant {
  TEXT = "text",
  TINTED = "tinted",
  SOLID = "solid"
};

interface Props {
  title: string;
  variant?: ButtonVariant;
  onPress?: PressableProps["onPress"];
}

const VARIANT_STYLES = {
  [ButtonVariant.TEXT]: {
    color: "white",
    backgroundColor: "transparent",
    androidRippleColor: "#0af1",
  },
  [ButtonVariant.TINTED]: {
    color: "#0af",
    backgroundColor: "transparent",
    androidRippleColor: "#0af1",
  },
  [ButtonVariant.SOLID]: {
    color: "white",
    backgroundColor: "#0af",
    androidRippleColor: "#fff3",
  },
} as const;

export default function KeypadButton({
  title,
  variant = ButtonVariant.TEXT,
  onPress,
}: Props) {
  return (
    <Pressable
      style={{
        flex: 1,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: VARIANT_STYLES[variant].backgroundColor,
        borderRadius: 12,
        overflow: "hidden",
      }}
      android_ripple={{
        color: VARIANT_STYLES[variant].androidRippleColor,
        foreground: true,
      }}
      onPress={(event) => onPress?.(event)}>
      <Text
        style={{
          padding: 12,
          color: VARIANT_STYLES[variant].color,
          fontSize: 28,
          textAlign: "center",
        }}>
        {title}
      </Text>
    </Pressable>
  );
}
