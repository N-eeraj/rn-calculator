import MenuItem from "@components/Keypad/MenuItem";
import MEASUREMENT_TYPES from "@constants/measurementTypes";
import { COLORS } from "@constants/theme";
import { useRouter } from "expo-router";
import { FlatList, StyleSheet } from "react-native";

export default function Converter() {
  const router = useRouter();

  return (
    <FlatList
      data={MEASUREMENT_TYPES}
      numColumns={3}
      renderItem={({ item }) => (
        <MenuItem
          {...item}
          onPress={() => router.push(`/converter/${item.slug}`)} />
      )}
      style={styles.container}  />
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.background,
  },
});
