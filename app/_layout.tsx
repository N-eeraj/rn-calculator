import { COLORS } from "@constants/theme";
import { BottomSheetModalProvider } from "@gorhom/bottom-sheet";
import { Stack } from "expo-router";
import { StyleSheet } from "react-native";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { SafeAreaView } from "react-native-safe-area-context";

export default function RootLayout() {
  return (
    <SafeAreaView style={styles.safeArea}>
      <GestureHandlerRootView style={styles.container}>
        <BottomSheetModalProvider>
          <Stack
            screenOptions={{
              headerShown: false,
              contentStyle: styles.layoutContent,
            }} />
        </BottomSheetModalProvider>
      </GestureHandlerRootView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: COLORS.background,
  },
  layoutContent: {
    flex: 1,
    backgroundColor: COLORS.background,
  },
  container: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: COLORS.background,
  },
});
