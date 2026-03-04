import { COLORS } from "@constants/theme";
import { StyleSheet, View } from "react-native";

export default function Display() {
  return (
    <View style={styles.container}>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 2,
    backgroundColor: COLORS.background,
  },
});
