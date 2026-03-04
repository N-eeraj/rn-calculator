import { COLORS } from "@constants/theme";
import { Stack } from "expo-router";
import { StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function RootLayout() {
  return (
    <SafeAreaView style={styles.safeArea}>
      <Stack
        screenOptions={{
          headerShown: false,
          contentStyle: styles.layoutContent,
        }} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: COLORS.background,
  },
  layoutContent: {
    backgroundColor: COLORS.background,
  },
});
