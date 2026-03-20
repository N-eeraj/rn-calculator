import Selection from "@components/Selection";
import { COLORS } from "@constants/theme";
import { type ComponentProps } from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";

interface Props {
  value: string | number;
  label?: string;
  isActive: boolean;
  selectionProps: ComponentProps<typeof Selection>;
  onItemClick: () => void;
}

export default function ConversionDisplayItem({
  value,
  label,
  isActive,
  selectionProps,
  onItemClick,
}: Props) {
  return (
    <View style={styles.itemContainer}>
      <Selection
        {...selectionProps} />

      <Pressable
        style={styles.value}
        onPress={onItemClick}>
        <Text style={[
          styles.value,
          isActive && styles.activeValue,
          `${value}`.length > 13 && styles.longerValue,
        ]}>
          {value}
        </Text>
      </Pressable>

      {label && (
        <Pressable
          style={styles.name}
          onPress={onItemClick}>
          <Text style={styles.name}>
            {label}
          </Text>
        </Pressable>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  itemContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    flexWrap: "wrap",
  },
  value: {
    fontSize: 32,
    flex: 1,
    textAlign: "right",
    color: COLORS.foreground,
  },
  longerValue: {
    fontSize: 24,
  },
  activeValue: {
    color: COLORS.primary,
  },
  name: {
    width: "100%",
    textAlign: "right",
    color: COLORS.inactive,
    fontSize: 12,
  },
});
