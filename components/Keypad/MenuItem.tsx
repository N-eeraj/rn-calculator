import { COLORS } from "@constants/theme";
import { type LucideProps } from "lucide-react-native";
import { ForwardRefExoticComponent } from "react";
import { Pressable, StyleSheet, Text, type PressableProps } from "react-native";

interface Props extends PressableProps {
  text: string;
  icon: ForwardRefExoticComponent<LucideProps>;
}

export default function MenuItem({
  text,
  icon: Icon,
  style: _style,
  ...props
}: Props) {
  return (
    <Pressable style={styles.button}
      {...props}>
        <Icon
          size={28}
          color={COLORS.inactive} />
        <Text style={styles.text}>
          {text}
        </Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  button: {
    rowGap: 18,
    width: "33.333%",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 38,
    paddingHorizontal: 12,
  },
  text: {
    textAlign: "center",
    fontSize: 14,
    color: COLORS.inactive,
    opacity: 0.4,
  },
});
