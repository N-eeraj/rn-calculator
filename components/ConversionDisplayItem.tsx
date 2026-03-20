import Selection from "@components/Selection";
import { COLORS } from "@constants/theme";
import { type ComponentProps, type ReactElement } from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";

interface Props {
  value: string | number;
  label?: string;
  isActive: boolean;
  selectionProps: ComponentProps<typeof Selection>;
  loadingState?: ReactElement;
  onItemClick: () => void;
}

export default function ConversionDisplayItem({
  value,
  label,
  isActive,
  selectionProps,
  loadingState,
  onItemClick,
}: Props) {
  return (
    <View style={styles.itemContainer}>
      <Selection {...selectionProps} />

      {loadingState
        ? loadingState
        : (
          <>
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
          </>
        )
      }
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
