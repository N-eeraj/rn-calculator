import { COLORS } from "@constants/theme";
import { LucideProps } from "lucide-react-native";
import { ForwardRefExoticComponent } from "react";
import { Pressable, StyleSheet, Text, type PressableProps } from "react-native";

export enum ButtonVariant {
  TEXT = "text",
  TINTED = "tinted",
  SOLID = "solid"
};

interface Props extends PressableProps {
  text?: string;
  icon?: ForwardRefExoticComponent<LucideProps>;
  variant?: ButtonVariant;
}

const VARIANT_STYLES = {
  [ButtonVariant.TEXT]: {
    color: COLORS.foreground,
    backgroundColor: "transparent",
    androidRippleColor: COLORS.ripple.primary,
  },
  [ButtonVariant.TINTED]: {
    color: COLORS.primary,
    backgroundColor: "transparent",
    androidRippleColor: COLORS.ripple.primary,
  },
  [ButtonVariant.SOLID]: {
    color: COLORS.foreground,
    backgroundColor: COLORS.primary,
    androidRippleColor: COLORS.ripple.background,
  },
} as const;

export default function KeypadButton({
  text,
  icon: Icon,
  variant = ButtonVariant.TEXT,
  onPress,
}: Props) {
  return (
    <Pressable
      style={[
        styles.button,
        {
          backgroundColor: VARIANT_STYLES[variant].backgroundColor,
        },
      ]}
      android_ripple={{
        color: VARIANT_STYLES[variant].androidRippleColor,
        foreground: true,
      }}
      onPress={(event) => onPress?.(event)}>
      {text && (
      <Text
        style={[
          styles.buttonText,
          {
            color: VARIANT_STYLES[variant].color,
          },
        ]}>
        {text}
      </Text>
      )}
      {Icon && (
        <Icon color={VARIANT_STYLES[variant].color} />
      )}
    </Pressable>
  );
}

const styles = StyleSheet.create({
  button: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 12,
    overflow: "hidden",
  },
  buttonText: {
    padding: 12,
    fontSize: 28,
    textAlign: "center",
  },
});
